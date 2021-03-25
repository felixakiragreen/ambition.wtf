import React from 'react'

import { styled, darkTheme } from '../ui'
import { Page, Content, Box, SvgPixels } from '../components'
import { AccountsList } from '../types'

import Hero from './Hero.mdx'
import Buy from './Buy'
import Faq from './Faq.mdx'
import Behind from './Behind.mdx'

type Props = {
  accounts: AccountsList
  updateAccounts: (accounts: AccountsList) => void
}

export const StyledAside = styled('aside', {
  background: '$background',
  color: '$foreground',
})

export const Home: React.FC<Props> = ({ accounts, updateAccounts }) => {
  return (
    <Page>
      <Content>
        <Hero />
      </Content>

      <Buy accounts={accounts} updateAccounts={updateAccounts} />
      <Content>
        <Faq />
      </Content>
      <StyledAside className={darkTheme}>
        <Box
          css={{
            display: 'flex',
            background: '$white',
            color: '$background',
          }}
        >
          <SvgPixels />
        </Box>
        <Content>
          <Behind />
        </Content>
      </StyledAside>
    </Page>
  )
}
