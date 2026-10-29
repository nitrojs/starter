This is a [Nitro](https://nitro.build) v3 server project (built on H3 v2). Nitro v3 differs a lot from v2 and your knowledge is likely outdated: read https://nitro.build/llms.txt (index of Markdown docs), especially `docs/utils.md` (imports) and `docs/migration.md` (v2 differences).

- `server/` is the server directory (`serverDir`); create subdirectories as needed: `api/` (routes under `/api`), `routes/`, `middleware/`, `plugins/` and `assets/` (server assets). File paths map to URLs: `server/api/users/[id].get.ts` is `GET /api/users/:id`.
- `public/` (project root) holds static files.
- No auto-imports: import `defineHandler`, `HTTPError`, ... from `"nitro"`, H3 utilities (`getQuery`, `readBody`, ...) from `"nitro/h3"`, and your own helpers (e.g. `server/utils/`) with relative imports.
- Handlers receive an H3 v2 event (`event.req` is a web `Request`, `event.url` a `URL`) and return JSON, a string or a `Response`.
- Scripts: `dev` and `start` run the `server/` sources directly without a build (experimental `builder: false`; `nitro build` is not supported).
- Testing: `npx nitro fetch /api/hello` sends one request to the server sources (or to the running dev server) and prints the response, no build needed (curl-like options: `-X`, `-H`, `--json`, `-i`). `npx nitro serve` starts the server from the sources.
