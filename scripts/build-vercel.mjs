import { mkdirSync, cpSync, writeFileSync, rmSync } from 'fs'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const ESBUILD = join(ROOT, 'node_modules/vite/node_modules/esbuild/bin/esbuild')
const VERCEL_OUT = join(ROOT, '.vercel/output')
const FUNC_DIR = join(VERCEL_OUT, 'functions/index.func')
const SERVER_ENTRY = join(ROOT, 'dist/server/server.js')
const TEMP_ENTRY = join(ROOT, 'scripts/_vercel-entry.mjs')

// Clean previous output
rmSync(VERCEL_OUT, { recursive: true, force: true })

mkdirSync(join(VERCEL_OUT, 'static'), { recursive: true })
mkdirSync(FUNC_DIR, { recursive: true })

// Static assets → served by Vercel CDN
cpSync(join(ROOT, 'dist/client'), join(VERCEL_OUT, 'static'), { recursive: true })

// Temporary entry: adapts Web Fetch API server → Node.js HTTP (Vercel lambda)
writeFileSync(TEMP_ENTRY, `
import { Readable } from 'node:stream'
import serverModule from '${SERVER_ENTRY.replace(/\\/g, '/')}'

const server = serverModule.default ?? serverModule

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] ?? 'https'
  const host = req.headers['x-forwarded-host'] ?? req.headers['host'] ?? 'localhost'
  const url = new URL(req.url, \`\${proto}://\${host}\`)

  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (value != null) headers.append(key, Array.isArray(value) ? value.join(', ') : String(value))
  }

  let body
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    const buf = Buffer.concat(chunks)
    if (buf.length) body = buf
  }

  const request = new Request(url.toString(), { method: req.method, headers, body, duplex: 'half' })
  const response = await server.fetch(request)

  res.statusCode = response.status
  for (const [k, v] of response.headers.entries()) res.setHeader(k, v)

  if (response.body) {
    Readable.fromWeb(response.body).pipe(res)
  } else {
    res.end()
  }
}
`.trim())

// Bundle everything into a single CJS file
execFileSync(ESBUILD, [
  TEMP_ENTRY,
  '--bundle',
  '--platform=node',
  '--format=cjs',
  '--target=node20',
  `--outfile=${join(FUNC_DIR, 'index.js')}`,
], { stdio: 'inherit' })

rmSync(TEMP_ENTRY, { force: true })

// Node.js 20 serverless function config
writeFileSync(join(FUNC_DIR, '.vc-config.json'), JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'index.js',
  launcherType: 'Nodejs',
}))

// Routing: immutable cache for hashed assets → filesystem → SSR catch-all
writeFileSync(join(VERCEL_OUT, 'config.json'), JSON.stringify({
  version: 3,
  routes: [
    {
      src: '/assets/(.+)',
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      continue: true,
    },
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index' },
  ],
}))

console.log('✓ .vercel/output ready')
