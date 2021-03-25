import icon_twitter from 'simple-icons/icons/twitter'
import icon_discord from 'simple-icons/icons/discord'
import icon_opensea from './icon_opensea'
import icon_email from './icon_email'

import { SocialLink } from '../types'

const transform = {
  transform: {
    scale: 0.65,
    translate: {
      x: 10,
      y: 10,
    },
  },
}

export const twitter: SocialLink = {
  url: 'https://twitter.com/cryptojunks_wtf',
  username: '@cryptojunks_wtf',
  ...icon_twitter,
  ...transform,
}

export const socials: SocialLink[] = [
  {
    url: 'mailto:',
    username: '...',
    ...icon_email,
    transform: {
      ...transform.transform,
      translate: {
        x: 7.5,
        y: 8,
      },
    },
  },
  {
    url: 'discord:',
    username: '...',
    ...icon_discord,
    ...transform,
  },
  twitter,
  {
    url: 'opensea',
    username: '...',
    ...icon_opensea,
    transform: {
      ...transform.transform,
      scale: 0.5,
      translate: {
        x: 10.5,
        y: 9.5,
      },
    },
  },
]
