import {useEffect} from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum,goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura'



const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum,goerli],
  [
    infuraProvider({ apiKey:'c24c8ebb1b7c447aa3e95e28e11e6532'})
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '4a22daadfc8f2c6d599a993403314255',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient 
})


export default function App({ Component, pageProps }: AppProps) {
  return(
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>

  )

   
}