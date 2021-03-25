import React from 'react'

import { styled, darkTheme } from '../ui'
import { Page, Content } from '../components'

import Hero from './Hero.mdx'
import Faq from './Faq.mdx'
import Who from './Who.mdx'



export const StyledAside = styled('aside', {
  background: '$background',
  color: '$foreground',
})

type Props = {
}

export const Home: React.FC<Props> = ({}) => {
  return (
    <Page>
      <Content>
        <Hero />
      </Content>
      <Content>
        <Faq />
      </Content>
      <StyledAside className={darkTheme}>
        <Content>
          <Who />
        </Content>
      </StyledAside>
    </Page>
  )
}
