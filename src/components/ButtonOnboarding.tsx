import React, { useState, useEffect, useRef } from 'react'
import MetaMaskOnboarding from '@metamask/onboarding/src/index'

import { AccountsList } from '../types'
import { Button } from './Button'

import { ONBOARDING as BTN_TXT } from '../content/ButtonLabels'

type Props = {
  accounts: AccountsList
  updateAccounts: (accounts: AccountsList) => void
}

export const ButtonOnboarding: React.FC<Props> = ({
  accounts,
  updateAccounts,
}) => {
  const [text, setText] = useState(BTN_TXT.ONBOARD)
  const [disabled, setDisabled] = useState(false)
  const onboarding = useRef<MetaMaskOnboarding>()

  const ethereum = window.ethereum

  // create new MetaMaskOnboarding on mount
  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])

  // update the button label, disabled
  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setText(BTN_TXT.CONNECTED)
        setDisabled(true)
        onboarding.current?.stopOnboarding()
      } else {
        setText(BTN_TXT.CONNECT)
        setDisabled(false)
      }
    }
  }, [accounts])

  // update accounts
  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      ethereum.request({ method: 'eth_requestAccounts' }).then(updateAccounts)

      ethereum.on('accountsChanged', updateAccounts)

      return () => {
        ethereum?.on('accountsChanged', updateAccounts)
      }
    }
  }, [])

  // connect
  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts) => updateAccounts(newAccounts))
    } else {
      onboarding.current?.startOnboarding()
    }
  }

  return (
    <Button disabled={disabled} onClick={onClick} size="md">
      {text} - {accounts[0]}
    </Button>
  )
}
