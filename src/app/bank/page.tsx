import { Metadata } from 'next'
import Link from 'next/link'
import { FinancialBankHeader, LuxSiteFooter } from '@/components/LuxChrome'

export const metadata: Metadata = {
  title: 'Lux Bank - Self-Custody Banking',
  description: 'Bank on your terms. Self-custody accounts, instant global transfers, and yield on every dollar.',
}

const accountTypes = [
  {
    name: 'Checking',
    description: 'Everyday spending with instant global transfers',
    features: ['No minimum balance', 'Instant P2P transfers', 'Virtual & physical cards', 'No monthly fees'],
    apy: '0%',
  },
  {
    name: 'High-Yield Savings',
    description: 'Earn competitive yield on your savings',
    features: ['5-8% APY on stablecoins', 'No lock-up period', 'Withdraw anytime', 'FDIC-equivalent coverage'],
    apy: '5-8%',
  },
  {
    name: 'Treasury',
    description: 'For businesses and high-net-worth individuals',
    features: ['Multi-sig controls', 'Custom approval flows', 'API access', 'Dedicated support'],
    apy: '4-6%',
  },
]

const features = [
  {
    title: 'Self-Custody',
    description: 'Your keys, your money. We never hold your funds. Non-custodial by design.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: 'Instant Transfers',
    description: 'Send money globally in seconds. No waiting, no intermediaries, no limits.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Yield on Everything',
    description: 'Every dollar earns. Automated yield strategies maximize your returns.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Global Access',
    description: 'Bank from anywhere. No borders, no restrictions, no discrimination.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
]

const cards = [
  {
    name: 'Lux Card',
    tier: 'Standard',
    color: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
    benefits: ['1% cashback', 'No foreign fees', 'Apple/Google Pay', 'Instant freeze'],
    fee: '$0/year',
  },
  {
    name: 'Lux Card',
    tier: 'Premium',
    color: 'bg-gradient-to-br from-zinc-700 to-zinc-800',
    benefits: ['2% cashback', 'Airport lounge access', 'Travel insurance', 'Priority support'],
    fee: '$99/year',
  },
  {
    name: 'Lux Card',
    tier: 'Black',
    color: 'bg-gradient-to-br from-zinc-600 to-zinc-700',
    benefits: ['3% cashback', 'Unlimited lounge', 'Concierge service', 'Metal card'],
    fee: '$299/year',
  },
]

const transfers = [
  { route: 'US → EU', time: '< 1 second', fee: '$0', traditional: '3-5 days, $25-50' },
  { route: 'EU → Asia', time: '< 1 second', fee: '$0', traditional: '2-4 days, $30-60' },
  { route: 'LATAM → US', time: '< 1 second', fee: '$0', traditional: '3-7 days, $20-40' },
  { route: 'Africa → EU', time: '< 1 second', fee: '$0', traditional: '5-10 days, $40-80' },
]

export default function BankPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <FinancialBankHeader
        actions={
          <Link
            href="https://app.lux.financial"
            className="px-3 sm:px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Open Account
          </Link>
        }
      />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Self-Custody Banking
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-6">
          LUX BANK
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-4">
          Bank on your terms. Not theirs.
        </p>
        <p className="text-base text-muted-foreground/80 text-center max-w-xl mb-12">
          Self-custody accounts with instant global transfers, competitive yield, and no monthly fees. Your money, your control.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.financial"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
          >
            Open Account
          </Link>
          <Link
            href="#accounts"
            className="px-8 py-4 bg-card border border-border backdrop-blur-sm font-medium rounded-xl hover:bg-muted transition-colors"
          >
            View Accounts
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border backdrop-blur-sm rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 text-foreground">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section id="accounts" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Account Types</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Choose the account that fits your needs. All accounts are self-custody and non-custodial.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {accountTypes.map((account) => (
              <div
                key={account.name}
                className="bg-muted/50 border border-border backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{account.name}</h3>
                  <span className="text-lg font-bold text-foreground">{account.apy} APY</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{account.description}</p>
                <ul className="space-y-2">
                  {account.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://app.lux.financial"
                  className="mt-6 block w-full text-center px-4 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Open {account.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section id="cards" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Lux Cards</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Spend anywhere Visa is accepted. Virtual and physical cards available.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.tier}
                className="bg-card border border-border backdrop-blur-sm rounded-xl overflow-hidden"
              >
                {/* Card Visual */}
                <div className={`${card.color} p-6 aspect-[1.6/1] flex flex-col justify-between`}>
                  <div className="text-sm font-medium opacity-80">{card.name}</div>
                  <div>
                    <div className="text-xs opacity-60 mb-1">•••• •••• •••• 4242</div>
                    <div className="text-lg font-bold">{card.tier}</div>
                  </div>
                </div>
                {/* Card Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm">Annual Fee</span>
                    <span className="font-bold">{card.fee}</span>
                  </div>
                  <ul className="space-y-2">
                    {card.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfers */}
      <section id="transfers" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Global Transfers</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Send money anywhere instantly. No waiting, no fees, no limits.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Route</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Lux Bank</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Fee</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Traditional Bank</th>
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => (
                  <tr key={transfer.route} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{transfer.route}</td>
                    <td className="py-4 px-4 text-foreground font-bold">{transfer.time}</td>
                    <td className="py-4 px-4 text-foreground font-bold">{transfer.fee}</td>
                    <td className="py-4 px-4 text-muted-foreground">{transfer.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Your Account</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            No paperwork. No credit check. No minimum balance. Just connect your wallet and start banking.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.lux.financial"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
            >
              Open Account
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-muted border border-border backdrop-blur-sm font-medium rounded-xl hover:bg-muted/80 transition-colors"
            >
              Explore Finance
            </Link>
          </div>
        </div>
      </section>

      <LuxSiteFooter />
    </main>
  )
}
