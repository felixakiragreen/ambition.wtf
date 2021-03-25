import React from 'react'

import { styled } from '../ui'
import { Page, Content } from '../components'

import Why from './Why.mdx'
import What from './What.mdx'
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
        <Why />
      </Content>
      <Content>
        <What />
      </Content>
      <StyledAside>
        <Content>
          <Who />
        </Content>
      </StyledAside>
    </Page>
  )
}
