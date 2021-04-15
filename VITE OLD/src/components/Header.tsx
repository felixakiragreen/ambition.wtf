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
              flexDirection: 'column',
            },
            '@sm': {
              py: '$2',
            },
            '@md': {
              py: '$4',
              flexDirection: 'row',
            },
            a: {
              color: '$foreground',
              textDecoration: 'none',
            },
          }}
        >
          <Box
            align="centerX"
            spacing="x"
            css={{
              fontFamily: '$sans',
              fontWeight: '$black',
              sx: '$4',
            }}
          >
            <Img
              src={logo}
              alt="Ambition logo"
              css={{
                '@initial': {
                  height: '$12',
                },
                '@sm': {
                  height: '$16',
                },
              }}
            />
            <Text
              css={{
                '@initial': {
                  text: '$3xl',
                },
                '@sm': {
                  text: '$4xl',
                },
              }}
            >
              <Text>ambition</Text>
              <Text css={{ color: '$grey500' }}>.wtf</Text>
            </Text>
          </Box>
          <Box
            align="centerX"
            css={{
              sx: '$4',
              '@initial': {
                pt: '$4',
              },
              '@md': {
                pt: '$0',
              },
            }}
          >
            <Box>
              <UnderlinedHeadingLink href="#why-the-fuck-about">
                Why
              </UnderlinedHeadingLink>
            </Box>
            <Box>
              <UnderlinedHeadingLink href="#what-the-fuck-projects">
                What
              </UnderlinedHeadingLink>
            </Box>
            <Box>
              <UnderlinedHeadingLink href="#who-the-fuck-team">
                Who
              </UnderlinedHeadingLink>
            </Box>
            <Box>
              <UnderlinedHeadingLink href="#where-the-fuck-socials">
                Where
              </UnderlinedHeadingLink>
            </Box>
          </Box>
        </Box>
      </Content>
    </StyledHeader>
  )
}
