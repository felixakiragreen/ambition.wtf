import React from 'react'

import {
  Content,
  Box,
  Text,
  ButtonMinting,
  ButtonOnboarding,
} from '../components'

import { AccountsList } from '../types'

type Props = {
  accounts: AccountsList
  updateAccounts: (accounts: AccountsList) => void
}

const Buy: React.FC<Props> = ({ children, accounts, updateAccounts }) => {
  return (
    <Box>
      <Box css={{ height: '$48', background: '$teal' }} align="center">
        <Text size="2xl">🚧 GRID GO HERE</Text>
      </Box>
      <Content css={{ background: '$orange200' }}>
        <Box direction="v" align="centerX" spacing="y">
          <Text size="2xl">🚧 BUYING SHIT GO HERE</Text>
          <Text size="2xl">{accounts}</Text>

          <ButtonMinting accounts={accounts} />
          <ButtonOnboarding
            accounts={accounts}
            updateAccounts={updateAccounts}
          />
        </Box>
      </Content>
    </Box>
  )
}

export default Buy
