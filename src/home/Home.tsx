import React from 'react'

import { styled } from '../ui'
import { Page, Content } from '../components'

import Why from './Why.mdx'
import What from './What.mdx'
import Who from './Who.mdx'

export const AltBg = styled('aside', {
  background: '$mirage',
})

type Props = {}

export const Home: React.FC<Props> = ({}) => {
  return (
    <Page>
      <Content>
        <Why />
      </Content>
      <AltBg>
        <Content>
          <What />
        </Content>
      </AltBg>
      <Content>
        <Who />
      </Content>
    </Page>
  )
}
