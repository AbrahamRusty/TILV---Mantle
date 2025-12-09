'use client'

import { configureChains, createConfig } from 'wagmi'
import { mantleTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// Configure Mantle chains
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mantleTestnet],
  [publicProvider()]
)

// Configure connectors
const connectors = [
  new InjectedConnector({
    chains,
    options: {
      shimDisconnect: true,
    },
  }),
  new WalletConnectConnector({
    chains,
    options: {
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
      showQrModal: true,
    },
  }),
]

// Create wagmi config
export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }
