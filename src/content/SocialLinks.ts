import icon_twitter from 'simple-icons/icons/twitter'
import icon_rarible from './icon_rarible'
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
  url: 'https://twitter.com/ambition_wtf',
  username: '@ambition_wtf',
  ...icon_twitter,
  ...transform,
}

export const socials: SocialLink[] = [
  {
    url: 'mailto:email@ambition.wtf',
    username: 'email@ambition.wtf',
    ...icon_email,
    transform: {
      ...transform.transform,
      translate: {
        x: 7.5,
        y: 8,
      },
    },
  },
  twitter,
  {
    url: 'https://rarible.com/ambition_wtf?tab=created',
    username: '0xe6edbd8d56892e0ce615087d2d6b7b52dc77ac7e',
    ...icon_rarible,
    transform: {
      ...transform.transform,
      translate: {
        x: 5,
        y: 5,
      },
    },
  },
  // {
  //   url: '',
  //   username: 'opensea',
  //   ...icon_opensea,
  //   transform: {
  //     ...transform.transform,
  //     scale: 0.5,
  //     translate: {
  //       x: 10.5,
  //       y: 9.5,
  //     },
  //   },
  // },
]
