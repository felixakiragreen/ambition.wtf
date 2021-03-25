import React, { useState, useEffect } from 'react'

import { ethers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider'

import CryptoJunks from '../artifacts/CryptoJunks.json'
import { Button } from './Button'
import { BUYING as BTN_TXT } from '../content/ButtonLabels'

import { AccountsList, EthWeb3 } from '../types'

type Props = {
  accounts: AccountsList
}

export const ButtonMinting: React.FC<Props> = ({ accounts }) => {
  const [text, setText] = useState(BTN_TXT.OPEN)
  const [disabled, setDisabled] = useState(false)

  const [provider, setProvider] = useState<EthWeb3>()

  const ethereum = window.ethereum

  useEffect(() => {
    async function detect() {
      const hasProvider = await detectEthereumProvider()

      if (hasProvider && ethereum) {
        const prov = new ethers.providers.Web3Provider(ethereum)
        console.log(prov)
        setProvider(prov)
      } else {
        setDisabled(true)
        setText(BTN_TXT.UNAVAILABLE)
      }
    }

    detect()
  }, [])

  const onClick = async () => {
    const networkId = ethereum.networkVersion
    const networkAddress = await provider?.network.ensAddress
    const abi = CryptoJunks.abi

    const networkData = CryptoJunks.networks[networkId]

    if (networkData) {
      const address = networkData?.address

      console.log('toodly boodly', networkId, networkAddress, address)

      if (address && abi) {
        const signer = provider?.getSigner()

        const contract = new ethers.Contract(address, abi, provider)
        console.warn('contract', contract)

        if (signer) {
          const signedContract = contract.connect(signer)

          const receipt = await signedContract.fuckingMint()

          console.log('receipt', receipt)
        } else {
          console.log('no signer')
        }
      }
    } else {
      window.alert('Smart contract not deployed on this network')
    }
  }

  return (
    <Button disabled={disabled} onClick={onClick} size="lg">
      {text}
    </Button>
  )
}
