'use client'

import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TILV
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {isConnected ? (
                <>
                  <span className="text-sm text-gray-300">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                  <button
                    onClick={() => disconnect()}
                    className="px-4 py-2 bg-red-500/80 hover:bg-red-600 text-white rounded-lg transition"
                  >
                    Disconnect
                  </button>
                </>
              ) : (
                <button
                  onClick={() => connect({ connector: connectors[0] })}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Tokenized Invoice Liquidity Vault
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform invoices into instant liquidity. SMEs get funded in 24 hours,
            investors earn stable yields backed by real economic activity on Mantle Network.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Borrower Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
            <div className="text-4xl mb-4">📤</div>
            <h3 className="text-2xl font-bold text-white mb-4">For SMEs</h3>
            <p className="text-gray-300 mb-6">
              Upload your invoices, get verified by AI, and receive instant liquidity
              without traditional bank loans.
            </p>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Funds in 24-48 hours
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Lower fees than factoring
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                No collateral required
              </li>
            </ul>
            <Link
              href="/borrower/upload"
              className="block w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white text-center font-semibold rounded-lg transition"
            >
              Upload Invoice
            </Link>
          </div>

          {/* Investor Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-white mb-4">For Investors</h3>
            <p className="text-gray-300 mb-6">
              Earn stable yields by providing liquidity to invoice financing vaults.
              Diversified, transparent, and backed by real cashflows.
            </p>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                4-25% APY based on risk tier
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Auto-diversified portfolio
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Real-world asset backing
              </li>
            </ul>
            <Link
              href="/investor/vaults"
              className="block w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded-lg transition"
            >
              View Vaults
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">$1.2M+</div>
            <div className="text-gray-400">Total Value Locked</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">4 25%</div>
            <div className="text-gray-400">Average APY</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
            <div className="text-gray-400">Invoices Processed</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>Built on Mantle Network • Powered by AI & RWA Tokenization</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
