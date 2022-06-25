import bsc from '@/assets/images/networks/bsc.svg';
import tokens from '@/_generated/tokens/tokens-bsc.json';
export default {
  name: 'BSCT',
  name_long: 'Binance Smart Chain Testnet',
  homePage: 'https://www.binance.org/en/smartChain',
  blockExplorerTX: 'https://testnet.bscscan.com/tx/[[txHash]]',
  blockExplorerAddr: 'https://testnet.bscscan.com/address/[[address]]',
  chainID: 97,
  tokens: tokens,
  contracts: [],
  icon: bsc,
  currencyName: 'BNB',
  isTestNetwork: true,
  isEthVMSupported: {
    supported: false,
    url: null,
    websocket: null
  },
  gasPriceMultiplier: 1,
  canBuy: false,
  coingeckoID: null
};