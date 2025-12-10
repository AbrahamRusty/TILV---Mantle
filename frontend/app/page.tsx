'use client'

import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-semibold text-[#1e3a5f] text-lg">TILV</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#cara-kerja" className="text-gray-600 hover:text-[#1e3a5f]">Cara Kerja</a>
              <a href="#fitur" className="text-gray-600 hover:text-[#1e3a5f]">Fitur</a>
              <a href="#investor" className="text-gray-600 hover:text-[#1e3a5f]">Investor</a>
            </div>

            {isConnected ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <button onClick={() => disconnect()} className="text-sm text-red-600 hover:underline">
                  Keluar
                </button>
              </div>
            ) : (
              <button
                onClick={() => connect({ connector: connectors[0] })}
                className="bg-[#1e3a5f] text-white text-sm px-5 py-2 rounded-lg hover:bg-[#2a4a6f] transition"
              >
                Hubungkan Wallet
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero - Clean & Simple */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-block bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
              Powered by Mantle Network
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] leading-tight mb-6">
              Invoice Financing<br />untuk UMKM Indonesia
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Cairkan invoice Anda dalam 24-48 jam. Tanpa agunan, proses cepat,
              dan transparan dengan teknologi blockchain.
            </p>
            <div className="flex gap-4">
              <Link
                href="/borrower"
                className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4a6f] transition"
              >
                Upload Invoice
              </Link>
              <Link
                href="/investor"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition"
              >
                Jadi Investor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Clean Grid */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">$2.4M</p>
              <p className="text-sm text-gray-500 mt-1">Total Didanai</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">250+</p>
              <p className="text-sm text-gray-500 mt-1">UMKM Terbantu</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">8-15%</p>
              <p className="text-sm text-gray-500 mt-1">APY Investor</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">24-48</p>
              <p className="text-sm text-gray-500 mt-1">Jam Pencairan</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Simple Steps */}
      <section id="cara-kerja" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Cara Kerja</h2>
          <p className="text-gray-600 mb-12">Proses sederhana untuk mendapatkan pendanaan</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-semibold mb-4">1</div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2">Upload Invoice</h3>
              <p className="text-gray-600 text-sm">Upload invoice Anda dalam format PDF atau gambar. AI kami akan memverifikasi secara otomatis.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-semibold mb-4">2</div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2">Validasi & Scoring</h3>
              <p className="text-gray-600 text-sm">Invoice dinilai risikonya dan di-tokenisasi sebagai NFT di blockchain Mantle.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-semibold mb-4">3</div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2">Terima Dana</h3>
              <p className="text-gray-600 text-sm">Dapatkan hingga 80% nilai invoice dalam 24-48 jam langsung ke wallet Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Clean Cards */}
      <section id="fitur" className="py-20 px-6 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Mengapa TILV?</h2>
          <p className="text-gray-300 mb-12">Solusi invoice financing untuk kebutuhan UMKM</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Tanpa Agunan</h3>
              <p className="text-gray-300 text-sm">Invoice Anda adalah jaminannya</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Proses Cepat</h3>
              <p className="text-gray-300 text-sm">Dana cair dalam 24-48 jam</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Transparan</h3>
              <p className="text-gray-300 text-sm">Tercatat di blockchain</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Biaya Rendah</h3>
              <p className="text-gray-300 text-sm">Fee lebih rendah dari bank</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investor" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Untuk Investor</h2>
              <p className="text-gray-600 mb-6">
                Dapatkan yield stabil dari pendanaan invoice UMKM. Diversifikasi portfolio
                Anda dengan aset dunia nyata yang didukung cashflow bisnis.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">APY 8-15% per tahun</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">3 tier vault berdasarkan risiko</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Withdraw kapan saja</span>
                </div>
              </div>
              <Link
                href="/investor"
                className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition"
              >
                Lihat Vault
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                  <div>
                    <p className="font-semibold text-[#1e3a5f]">Prime Vault</p>
                    <p className="text-sm text-gray-500">Risiko Rendah</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">8% APY</p>
                    <p className="text-xs text-gray-400">$850K TVL</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                  <div>
                    <p className="font-semibold text-[#1e3a5f]">Growth Vault</p>
                    <p className="text-sm text-gray-500">Risiko Menengah</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">12% APY</p>
                    <p className="text-xs text-gray-400">$620K TVL</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                  <div>
                    <p className="font-semibold text-[#1e3a5f]">Emerging Vault</p>
                    <p className="text-sm text-gray-500">Risiko Tinggi</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">15% APY</p>
                    <p className="text-xs text-gray-400">$380K TVL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Siap Memulai?</h2>
          <p className="text-gray-600 mb-8">
            Bergabung dengan ratusan UMKM yang telah menggunakan TILV
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/borrower"
              className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a4a6f] transition"
            >
              Upload Invoice
            </Link>
            <Link
              href="/investor"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition"
            >
              Jadi Investor
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#1e3a5f] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-medium text-[#1e3a5f]">TILV</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 TILV. Powered by Mantle Network</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#1e3a5f]">Docs</a>
            <a href="#" className="text-gray-500 hover:text-[#1e3a5f]">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-[#1e3a5f]">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
