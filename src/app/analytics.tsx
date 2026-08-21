'use client'

import { AnalyticsProvider, usePageview } from '@hanzo/event/react'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'

/** Publishable ingest key. It is write-only — it attributes a write and mints no
 *  reader — so it belongs in the bundle. It is also what makes the traffic ours:
 *  without a key the door files anonymous visitors under the reserved `$public`
 *  tenant, which we cannot read back, and the site then looks like it is
 *  reporting when nothing we can see is arriving.
 *
 *  A build may override it. The literal is the default because this site has no
 *  build-arg plumbing, and a value that only exists in a CI that does not exist
 *  fails silently. Next inlines either spelling into the same public bundle, so
 *  the two are the same trust class; only rotation differs. */
const INGEST_KEY =
  process.env.NEXT_PUBLIC_PUBLISHABLE_KEY || 'pk-gUZp6ZVfhJzSwK-rb4oLbVkpCnMBx5uSCpxf_5yEhQk'

/** Route changes. The provider counts the first load and this hook counts every
 *  move after it, so a page is counted exactly once. */
function Pageview() {
  usePageview(usePathname())
  return null
}

/** Do Not Track and Global Privacy Control are opt-outs and the client reads
 *  neither, so the site decides. The guard is on `window`, not `navigator`:
 *  Node defines a global navigator, so a navigator-only check passes during the
 *  static export prerender and then reaches for a window that isn't there. */
function consented(): boolean {
  if (typeof window === 'undefined') return true
  const nav = navigator as unknown as {
    doNotTrack?: string
    msDoNotTrack?: string
    globalPrivacyControl?: boolean
  }
  const win = window as unknown as { doNotTrack?: string }
  const dnt = nav.doNotTrack ?? win.doNotTrack ?? nav.msDoNotTrack
  if (dnt === '1' || dnt === 'yes') return false
  return !nav.globalPrivacyControl
}

/** Pageviews for every route, posted to the one event door (api.hanzo.ai
 *  /v1/event). Mounted once at the root so no page has to remember to opt in.
 *
 *  It wraps the tree rather than sitting beside it: a component that later wants
 *  to record something reaches this same client through useAnalytics, which is
 *  the difference between one client and two. */
export function Analytics({ children }: PropsWithChildren) {
  return (
    <AnalyticsProvider config={{ product: 'site', ingestKey: INGEST_KEY, enabled: consented() }}>
      <Pageview />
      {children}
    </AnalyticsProvider>
  )
}
