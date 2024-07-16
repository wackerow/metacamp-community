import type { CamperQuote, Community } from '@/types'

export const DEFAULT_IMAGE_PATH = 'assets/og-splash.png' as const
export const SITE_NAME = 'MetaCamp' as const
export const SITE_URL = 'https://metacamp.community' as const
export const APPLICATION_FORM_URL =
  'https://form.typeform.com/to/yXLG08Wn' as const
export const TWITTER_HANDLE = '@metacampcommunity' as const

export const PHOTO_CAROUSEL_IMAGES_DIR = '/assets/carousel' as const
export const CAMPER_IMAGE_DIR = '/assets/campers' as const
export const COMMUNITIES_LOGOS_DIR = '/assets/communities/' as const
export const QUOTE_AVATARS_DIR = `${CAMPER_IMAGE_DIR}/quotes` as const

export const CAMPER_QUOTES: CamperQuote[] = [
  {
    author: 'Gloria Kexin Wu',
    association: 'Karma3Labs',
    imageSrc: 'avatar-1.jpeg',
    quote:
      "MetaCamp is this magical place where you meet people who share the values of building alternative realities, for the better of the world. I had such a fantastic time with my fellow campers exploring the latest thoughts and mechanism designs for DAOs. I got loads of inspirations for my own project's mission on how to build the right reputation mechanisms for a decentralized system. But most importantly, I met the right people for building together.",
    area: 'quote-one',
  },
  {
    author: 'Kevin Owocki',
    association: 'SuperModular',
    imageSrc: 'avatar-2.jpeg',
    quote:
      "MetaCamp is the best of Costa Rica: sunshine, surf, hiking, & natural beauty. But the real magic at it's heart is in the curated participants, which offered great mental stimulation. The unconference sessions allowed me to nerd out in paradise with my favorite DAO frens. The vibes were high at an all time high, I'll definitely be back next year, MetaCamp is 1337.",
    area: 'quote-two',
  },
  {
    author: 'Christine Coffey',
    association: 'Arbitrum Foundation',
    imageSrc: 'avatar-4.jpeg',
    quote:
      "MetaCamp is a space for people who are idealistic, intelligent, disciplined and kind enough to be hugely impactful while also being radically vulnerable. It's refreshing, energizing and inspiring on a human level. A perfect reminder that we're not alone in this wild experiment of attempting to change the world.",
    area: 'quote-three',
  },
  {
    author: "Dermot O'Riordan",
    association: 'POKT Network',
    imageSrc: 'avatar-3.jpeg',
    quote:
      "If culture is what you do, not what you say, then MetaCamp's culture is about sharing, supporting, and learning while having lots of fun and not taking yourself too seriously. The stewards have created a really special, warm and inclusive community/retreat that makes it easy for friendships to be forged for people to freely share their perspectives and problems in the knowledge that the rest of the group is on-hand to listen and help. 10/10.",
    area: 'quote-four',
  },
].map(({ imageSrc, ...rest }) => ({
  imageSrc: `${QUOTE_AVATARS_DIR}/${imageSrc}`,
  ...rest,
}))

export const COMMUNITIES: Community[] = [
  {
    name: 'Hedgey',
    href: 'https://hedgey.finance',
    imageSrc: 'hedgey.svg',
  },
  {
    name: 'NiftyApes',
    href: 'https://www.niftyapes.money/',
    imageSrc: 'niftyapes.svg',
  },
  {
    name: 'POKT',
    href: 'https://pokt.network',
    imageSrc: 'pokt.png',
  },
  {
    name: 'Ethereum.org',
    href: 'https://ethereum.org',
    imageSrc: 'ethereum-org.svg',
  },
  {
    name: 'SuperModular',
    href: 'https://supermodular.xyz/',
    imageSrc: 'supermodular.svg',
  },
  {
    name: 'Coordinape',
    href: 'https://coordinape.com/',
    imageSrc: 'coordinape.svg',
  },
  {
    name: 'Debt DAO',
    href: 'https://debtdao.finance/',
    imageSrc: 'debtdao.svg',
  },
  {
    name: 'Gitcoin',
    href: 'https://gitcoin.co/',
    imageSrc: 'gitcoin.svg',
  },
  {
    name: 'MetaCartel Ventures',
    href: 'https://metacartel.xyz/',
    imageSrc: 'metacartel-ventures.svg',
  },
  {
    name: 'Giveth',
    href: 'https://giveth.io/',
    imageSrc: 'giveth.svg',
  },
  {
    name: 'Protocol Labs',
    href: 'https://protocol.ai/',
    imageSrc: 'protocol-labs.svg',
  },
  {
    name: 'Public Nouns',
    href: 'https://publicnouns.wtf/',
    imageSrc: 'public-nouns.svg',
  },
  {
    name: 'Hats',
    href: 'https://www.hatsprotocol.xyz/',
    imageSrc: 'hats.png',
  },
  {
    name: 'MetaFactory',
    href: 'https://metafactory.ai/',
    imageSrc: 'metafactory.svg',
  },
  {
    name: 'WGMI',
    href: 'https://wgmi.community/',
    imageSrc: 'wgmi.svg',
  },
  {
    name: 'Raid Brood',
    href: 'https://brood.raidguild.org/',
    imageSrc: 'raid-brood.svg',
  },
  // {
  //   name: 'GM Bus',
  //   href: '#',
  //   imageSrc: 'gm-bus.svg',
  // },
  {
    name: 'Snapshot',
    href: 'https://snapshot.org/#/',
    imageSrc: 'snapshot.svg',
  },
  {
    name: 'Cultur3',
    href: 'https://cultur3.capital/',
    imageSrc: 'cultur3.svg',
  },
  {
    name: 'KlimaDAO',
    href: 'https://klimadao.finance/',
    imageSrc: 'klimadao.svg',
  },
].map(({ imageSrc, ...rest }) => ({
  imageSrc: `${COMMUNITIES_LOGOS_DIR}${imageSrc}`,
  ...rest,
}))
