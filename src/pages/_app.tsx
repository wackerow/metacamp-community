import { ChakraProvider, localStorageManager, Box } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { arbitrum, gnosis, mainnet, optimism } from 'wagmi/chains'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'

import theme from '../theme'
import '@rainbow-me/rainbowkit/styles.css'
import { Fonts, Header, Footer } from '@/components'

const { chains, provider } = configureChains(
  [arbitrum, gnosis, mainnet, optimism],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID || '' }), publicProvider()]
)
const { connectors } = getDefaultWallets({
  appName: 'nextjs-chakraui-rainbow-template',
  chains,
})
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
          <Fonts />
          <Box textStyle="body" maxW="100rem" mx="auto">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
