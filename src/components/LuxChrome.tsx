'use client'

import Link from 'next/link'
import { LuxHeader, LuxFooter, LuxChatWidget } from '@luxfi/gui'
import type { ReactNode } from 'react'

const renderLink = ({ href, children, className }: { href: string; children: ReactNode; className?: string }) => (
  <Link href={href} className={className}>{children}</Link>
)

export function FinanceHeader({ actions }: { actions?: ReactNode }) {
  return <LuxHeader variant="finance" renderLink={renderLink} actions={actions} />
}

export function FinancialBankHeader({ actions }: { actions?: ReactNode }) {
  return <LuxHeader variant="financial" label="Bank" renderLink={renderLink} actions={actions} />
}

export function LuxSiteFooter() {
  return <LuxFooter renderLink={renderLink} legalEntity="Lux Partners" />
}

const LUX_PK = process.env.NEXT_PUBLIC_LUX_PK ?? ''

export function LuxAssistant({ pageContext }: { pageContext?: string }) {
  if (!LUX_PK) return null
  return <LuxChatWidget publishableKey={LUX_PK} pageContext={pageContext} />
}
