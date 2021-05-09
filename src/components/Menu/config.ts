// eslint-disable-next-line import/no-unresolved
import { MenuEntry } from 'uikit/index'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.seaswap.trade/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.seaswap.trade/#/pool',
      },
    ],
  },
  {
    label: 'Salmon Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Shark Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Sea-Swap',
        target: '_blank',
      },
      {
        label: 'WhitePaper',
        href: 'https://seaswap.gitbook.io/sea-swap/',
        target: '_blank'
      },
    ],
  },
]

export default config
