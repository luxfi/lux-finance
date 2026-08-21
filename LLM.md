# lux-finance

**Org:** luxfi  ·  **Ecosystem:** lux  ·  **Path:** `/Users/a/work/lux/luxfi/lux-finance`
**Origin:** https://github.com/luxfi/lux-finance.git

## Discovery

This file (`CLAUDE.md`) is the canonical agent-facing readme; `LLM.md` is a symlink to it. Update either name and both stay in sync.

## Where to look first

- `README.md` — human-facing overview (if present)
- `package.json` / `Cargo.toml` / `pyproject.toml` / `go.mod` — language & deps
- `.github/workflows/` — CI surface
- `docs/` — extended docs (if present)

## Telemetry

One client, `@hanzo/event`, wired once in `src/app/analytics.tsx` and mounted by
the root layout, so every route is counted without a page opting in. It posts to
`api.hanzo.ai/v1/event`; the analytics, insights and error dashboards are lenses
over that one stream. There is no second client and no tag on this site — do not
add Google Tag Manager, posthog-js, or a loader script beside it.

Consent lives here too: Do Not Track and Global Privacy Control are opt-outs and
the client reads neither, so `consented()` decides and passes `enabled`.

## Sibling repos

See the org-level `LLM.md` at `/Users/a/work/lux/luxfi/LLM.md` for the full inventory of sibling repos and inter-repo dependencies.
