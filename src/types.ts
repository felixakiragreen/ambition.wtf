import { ethers } from 'ethers'

export type AccountsList = string[]

export type EthWeb3 = ethers.providers.Web3Provider

export type SocialLink = {
  url: string
  username: string
  title: string
  hex: string
  path: string
  transform: {
    scale: number
    translate: {
      x: number
      y: number
    }
  }
}
