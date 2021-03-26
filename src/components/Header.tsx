import React from 'react'
import { styled } from '../ui'

import { Content, Box, Img } from './Box'
import { Text, Link, UnderlinedHeadingLink } from './Text'

import logo from '../assets/ambition_round_flat_border.svg'

export const StyledHeader = styled('header', {
  position: 'sticky',
  top: '$0',
  background: '$background_50',
  color: '$foreground',
  backdropFilter: 'blur(10px)',
  '-webkit-backdrop-filter': 'blur(10px)',
})

export const Header: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <Content>
        <Box
          align="centerX"
          justify="spaceBetweenX"
          css={{
            '@initial': {
              py: '$0',
            },
            '@sm': {
              py: '$2',
            },
            '@md': {
              py: '$4',
            },
            a: {
              color: '$foreground',
              textDecoration: 'none',
            },
            '&>a #peepee': {
              p: '$2',
              transition: '$1',
            },
            '&>a:hover #peepee': {
              color: '$indigo',
              background: '$felixgreen',
            },
          }}
        >
          <Link href="http://ambition.wtf" target="_blank">
            <Box
              align="centerX"
              spacing="x"
              css={{
                fontFamily: '$sans',
                fontWeight: '$black',
                gap: '$4',
              }}
            >
              <Img src={logo} alt="Ambition logo" css={{ height: '$16' }} />
              <Text size="4xl" id="peepee">
                <Text>ambition</Text>
                <Text css={{ color: '$grey500' }}>.wtf</Text>
              </Text>
            </Box>
          </Link>
          <Box
            align="centerX"
            css={{
              gap: '$4',
            }}
          >
            <UnderlinedHeadingLink href="#why-the-fuck-about">
              Why
            </UnderlinedHeadingLink>
            <UnderlinedHeadingLink href="#what-the-fuck-projects">
              What
            </UnderlinedHeadingLink>
            <UnderlinedHeadingLink href="#who-the-fuck-team">
              Who
            </UnderlinedHeadingLink>
            <UnderlinedHeadingLink href="#where-the-fuck-socials">
              Where
            </UnderlinedHeadingLink>
          </Box>
        </Box>
      </Content>
    </StyledHeader>
  )
}
