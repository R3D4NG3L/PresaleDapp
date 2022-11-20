// Rainbow and Wagmi integration guide: https://billyjitsu.hashnode.dev/the-rainbowkit-wagmi-guide-i-wish-i-had

import '@rainbow-me/rainbowkit/styles.css';
import { ledgerWallet, metaMaskWallet, walletConnectWallet, trustWallet, coinbaseWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import
{
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import
{
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { Chain } from "wagmi";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Analytics } from '@vercel/analytics/react';

const binanceChainTestNet: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [binanceChainTestNet],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider()
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      ledgerWallet({ chains }),
      trustWallet({ chains }),
    ],
  },
  {
    groupName: 'Others',
    wallets: [
      coinbaseWallet({ chains, appName: 'Presale Dapp' }),
      walletConnectWallet({ chains }),
      rainbowWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps)
{

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains} theme={darkTheme(
        {
          accentColor: '#E02424',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system',
        }
      )}>
        <Component {...pageProps} />
        <Analytics />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
