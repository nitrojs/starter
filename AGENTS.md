**Important:** Keep `AGENTS.md` updated.

This project is based on [Nitro](https://nitro.build) v3, [h3](https://h3.dev/), [Vite](https://vite.dev/) and [rolldown](https://rolldown.rs/).

## Project Structure

`app/` is the frontend (SPA/SSR) with `index.html` as entry. `server/` contains server-side code with subdirs: `api/` (/api prefixed handlers), `routes/` (non-prefixed route handlers), `middleware/`, `plugins/`, `utils/`, `assets/`, and `tasks/`. `public/` holds static assets (copied, not bundled). Config files: `vite.config.ts` (loads nitro/vite plugin), `nitro.config.ts` (serverDir, routeRules, preset, etc.), `tsconfig.json` (extends nitro/tsconfig, `~/*` path alias).

## Conventions

- Path alias `~/*` (tsconfig), use explicit `.ts` extensions
- Route handlers use `defineHandler()` from `nitro`
- Route file patterns: `[param]` for dynamic, `[...slug]` for catch-all, `.get.ts`/`.post.ts` for method-specific, `(group)/` ignored in path
- Environment-specific routes: `.dev.ts` / `.prod.ts` suffixes

## Nitro Usage

@node_modules/nitro/skills/nitro/docs/TOC.md

Use docs from `./node_modules/nitro/skills/nitro/docs/` and prefer over fetching from web.

**Imports from `nitro`:**

- `defineHandler(handler)` — Route handler with type inference
- `definePlugin(plugin)` — Server lifecycle plugin (hooks: `request`, `response`, `error`, `close`)
- `defineCachedHandler(handler, opts)` / `defineCachedFunction(fn, opts)` — Response/function caching (GET/HEAD only)
- `defineTask({ meta, run })` — Background tasks (requires `experimental: { tasks: true }`)

**Imports from `nitro/*`:**

- `useStorage(namespace?)` from `nitro/storage` — KV storage (`getItem`, `setItem`, `removeItem`, `getKeys`)
- `useDatabase()` from `nitro/database` — SQL via tagged template: `` db.sql`SELECT ...` `` (requires `experimental: { database: true }`)
- `runTask(name, { payload })` from `nitro/task` — Programmatic task execution

**Request Lifecycle:**

1. Plugins `request` hook → 2. Static assets → 3. Route rules → 4. Global middleware → 5. Route-scoped middleware → 6. Route handler → 7. Server entry fallback → 8. Renderer (SPA/SSR) → 9. Plugins `response` hook

**Config (`nitro.config.ts`):**

- `routeRules` — Per-route pattern headers, redirects, proxy, cache, basicAuth
- `$development` / `$production` — Environment-specific config
- `storage` + `devStorage` — KV driver config with dev overrides
- `prerender: { routes, crawlLinks }` — Static pre-rendering
- `traceDeps` — Externalize bundler-incompatible deps (traced into build output)

**`import.meta.*` (server-side flags):** `dev`, `preset`, `prerender`, `nitro`, `server`, `client`, `baseURL`

**Nitro v3 / H3 v2 new conventions:** `nitropack/runtime/*` → `nitro/*` (e.g. `nitro/storage`, `nitro/task`, `nitro/types`); all h3 imports from `nitro/h3`; `eventHandler()`/`defineEventHandler()` → `defineHandler()`; `createError()`/`H3Error` → `HTTPError`; `event.path` → `event.url.pathname`; `event.web` → `event.req` (native `Request`); body via `event.req.json()`/`.text()`/`.formData()`; headers via `event.req.headers.get()`/`event.res.headers.set()`; status via `event.res.status`; always `return` values (`return redirect(loc, code)`); `sendError()` → `throw HTTPError`; `sendNoContent()` → `return noContent()`; `useAppConfig()` removed.
