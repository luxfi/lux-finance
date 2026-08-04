import Link from 'next/link'
import { FinanceHeader, LuxSiteFooter } from '@/components/LuxChrome'

// There is no `stats` array. It held four numbers — $0 TVL, $0 borrowed, 0
// positions, 4 networks — and this page is `output: 'export'`, so whatever it
// held was frozen at build time. A figure a static export states about a live
// protocol is not a measurement; it is the date of the last `next build`.
//
// That is not a hypothetical: while these four said "$0", app.lux.finance said
// "$125M+ Total Value Locked" for the same protocol. Two Lux surfaces, two
// answers, neither of them measured.
//
// The fix is not to bake a better number here. It is that ONE surface states
// Liquid's size, and it is the one that can read the chain when you look at it:
// app.lux.finance takes an eth_getCode/eth_getBalance batch on mount and prints
// what came back, or says in words that it could not ask. This page links there
// and states nothing of its own — which makes disagreeing with it structurally
// impossible rather than merely unlikely.

const steps = [
  {
    step: '01',
    title: 'Deposit',
    description: 'Deposit yield-bearing collateral — wstETH, rETH, USDC, stLUX, and more — into Liquid Protocol vaults.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Borrow x*',
    description: 'Borrow multiplied tokens (xETH, xUSD, xLUX, xZOO, xAI, xPARS) up to 90% LTV against your collateral.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Yield Flows',
    description: 'MYT (Mix-Yield Token) strategies auto-allocate collateral yield across protocols to repay your debt.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Transmute',
    description: 'Convert x* tokens back to underlying assets via the 90-day transmuter. Fixed duration, predictable redemption.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

const tokenGroups = [
  {
    network: 'Lux Network',
    tokens: [
      { symbol: 'xLUX', name: 'Multiplied LUX', underlying: 'WLUX' },
      { symbol: 'xETH', name: 'Multiplied ETH', underlying: 'WETH' },
      { symbol: 'xUSD', name: 'Multiplied USD', underlying: 'USDC' },
    ],
  },
  {
    network: 'Zoo Network',
    tokens: [
      { symbol: 'xZOO', name: 'Multiplied ZOO', underlying: 'WZOO' },
    ],
  },
  {
    network: 'Hanzo Network',
    tokens: [
      { symbol: 'xAI', name: 'Multiplied AI', underlying: 'WHANZO' },
    ],
  },
  {
    network: 'Pars Network',
    tokens: [
      { symbol: 'xPARS', name: 'Multiplied PARS', underlying: 'WPARS' },
    ],
  },
]

const mytStrategies = [
  {
    vault: 'xETH Vault',
    strategies: [
      { name: 'Lido wstETH', risk: 'Conservative' },
      { name: 'Rocket Pool rETH', risk: 'Conservative' },
      { name: 'Frax sfrxETH', risk: 'Moderate' },
      { name: 'EigenLayer eETH', risk: 'Moderate' },
      { name: 'Tokemak tokeETH', risk: 'Aggressive' },
    ],
  },
  {
    vault: 'xUSD Vault',
    strategies: [
      { name: 'AAVE aUSDC', risk: 'Conservative' },
      { name: 'Yearn yvUSDC', risk: 'Moderate' },
      { name: 'Morpho mUSDC', risk: 'Moderate' },
    ],
  },
  {
    vault: 'xLUX Vault',
    strategies: [
      { name: 'Lux staking stLUX', risk: 'Conservative' },
    ],
  },
  {
    vault: 'xZOO Vault',
    strategies: [
      { name: 'Zoo staking stZOO', risk: 'Conservative' },
    ],
  },
  {
    vault: 'xAI Vault',
    strategies: [
      { name: 'AI compute stAI', risk: 'Moderate' },
    ],
  },
  {
    vault: 'xPARS Vault',
    strategies: [
      { name: 'Pars staking stPARS', risk: 'Conservative' },
    ],
  },
]

const features = [
  {
    title: '90% LTV',
    description: 'Maximum capital efficiency with correlated assets. Borrow up to 90% of your collateral value.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'NFT Positions',
    description: 'Each CDP is an NFT. Transferable, composable, and tradeable on any marketplace.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Chain',
    description: '4 networks, 6 vault types. Lux, Zoo, Hanzo, and Pars — all with native x* tokens.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Self-Repaying',
    description: 'Yield automatically repays debt. No manual payments, no margin calls, no stress.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

// Three of the four cards that used to be here were inherited from the Alchemix
// fork with the name swapped, and none of the three survives being checked:
//
//   "Multiple independent audits by leading security firms" — there is no
//   Liquid audit. lux/audits holds twenty-odd reports (consensus, network,
//   dexvm, zkvm, crypto…) and not one covers this protocol.
//
//   "$500K bounty program for critical vulnerabilities" — immunefi.com/bounty/
//   liquid/ is a 404. The URL is Alchemix's with the name replaced.
//
//   "All contracts verified and publicly auditable on-chain" — the vault
//   addresses answer eth_getCode with "0x" on chain 96369; there is no bytecode
//   to verify. (luxfi/liquid is a private repository besides.)
//
// What is left is what is true today, said plainly. Add cards back as the facts
// arrive — an audit report, a live bounty, deployed bytecode — not before.
const securityFeatures = [
  {
    title: 'Non-Custodial',
    description: 'Positions are contracts you control. No Lux service ever holds your collateral.',
  },
  {
    title: 'Not Yet Deployed',
    description:
      'Liquid has no vault bytecode on any Lux chain yet, so there is nothing at risk and nothing to withdraw. The app reads this from the chain rather than asserting it.',
  },
]

const riskColors: Record<string, string> = {
  Conservative: 'text-emerald-400',
  Moderate: 'text-amber-400',
  Aggressive: 'text-red-400',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <FinanceHeader
        actions={
          <Link
            href="https://app.lux.finance"
            className="px-3 sm:px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Launch App
          </Link>
        }
      />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Liquid Protocol V3
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-6">
          Self-Repaying Loans
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-4">
          Deposit collateral. Borrow x* tokens. Yield repays your debt.
        </p>
        <p className="text-base text-muted-foreground/80 text-center max-w-xl mb-12">
          Liquid Protocol V3 lets you borrow multiplied tokens (xETH, xUSD, xLUX, xZOO, xAI, xPARS) at 90% LTV. MYT strategies auto-allocate yield across protocols to repay your debt over time.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.finance"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
          >
            Launch App
          </Link>
          <Link
            href="https://docs.lux.network/liquid"
            className="px-8 py-4 bg-card border border-border backdrop-blur-sm font-medium rounded-xl hover:bg-muted transition-colors"
          >
            Read Docs
          </Link>
        </div>
      </section>

      {/* Where the figures are. Prose, not numbers — see the note above `steps`. */}
      <section className="py-12 px-6 border-y border-border bg-card backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            Liquid&rsquo;s locked value, live vaults and head block are read from the C&#8209;Chain
            when you open the app — this page does not carry a copy of them.
          </p>
          <Link
            href="https://app.lux.finance"
            className="inline-block mt-4 text-foreground font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            See what Liquid holds right now
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Four steps to self-repaying loans. No liquidation fear, no manual payments.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
                )}
                <div className="bg-card border border-border backdrop-blur-sm rounded-xl p-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 text-foreground">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/30 mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-muted/30 border border-border rounded-xl max-w-3xl mx-auto">
            <p className="text-center text-muted-foreground">
              <span className="font-medium text-foreground">Example:</span> Deposit wstETH, borrow xETH at 90% LTV, use xETH across DeFi while Lido/EigenLayer yield auto-repays your loan. Convert xETH back to ETH via the 90-day transmuter.
            </p>
          </div>
        </div>
      </section>

      {/* x* Tokens */}
      <section id="tokens" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">x* Multiplied Tokens</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            6 multiplied debt tokens across 4 networks. The &quot;x&quot; stands for multiplied &mdash; borrow against yield-bearing collateral at 90% LTV.
          </p>
          {tokenGroups.map((group) => (
            <div key={group.network} className="mb-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{group.network}</h3>
              <div className={`grid gap-4 ${group.tokens.length === 1 ? 'grid-cols-1 max-w-xs' : group.tokens.length === 2 ? 'grid-cols-2 max-w-lg' : 'grid-cols-3'}`}>
                {group.tokens.map((token) => (
                  <div
                    key={token.symbol}
                    className="bg-muted/50 border border-border backdrop-blur-sm rounded-xl p-4 hover:border-muted-foreground/50 transition-colors"
                  >
                    <p className="text-lg font-bold">{token.symbol}</p>
                    <p className="text-sm text-muted-foreground">{token.name}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Underlying: {token.underlying}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MYT Strategies */}
      <section id="strategies" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">MYT Strategies</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            The MYT strategies Liquid is designed around. None is live yet, so no yield or APY is quoted — a rate for a strategy that is not running would be a guess.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mytStrategies.map((vault) => (
              <div
                key={vault.vault}
                className="bg-card border border-border backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-4">{vault.vault}</h3>
                <div className="space-y-3">
                  {vault.strategies.map((strategy) => (
                    <div key={strategy.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">{strategy.name}</p>
                        <p className={`text-xs ${riskColors[strategy.risk]}`}>{strategy.risk}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Capital-efficient borrowing. NFT-based positions. Multi-chain yield.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-muted/50 border border-border backdrop-blur-sm rounded-xl p-6 hover:border-muted-foreground/50 transition-colors"
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

      {/* Security */}
      <section id="security" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Security First</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            What is true about Liquid&rsquo;s security right now — see the note above{' '}
            <code>securityFeatures</code> for what was removed and why.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Borrowing Against Your Yield</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deposit yield-bearing collateral. Borrow x* tokens at 90% LTV. Let MYT strategies auto-repay your debt.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.lux.finance"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
            >
              Launch App
            </Link>
            <Link
              href="https://bridge.lux.network"
              className="px-8 py-4 bg-muted border border-border backdrop-blur-sm font-medium rounded-xl hover:bg-muted/80 transition-colors"
            >
              Bridge Assets
            </Link>
          </div>
        </div>
      </section>

      <LuxSiteFooter />
    </main>
  )
}
