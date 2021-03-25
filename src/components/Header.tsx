import React from 'react'
import { styled } from '../ui'

import { Content, Box, Img } from './Box'
import { Text, Link } from './Text'
import { Svg } from './Svg'

import logo from '../assets/ambition_sharp_flat_clean.svg'
import { twitter } from '../content/SocialLinks'

export const StyledHeader = styled('header', {
  // position: 'sticky',
  // top: '$0',
  background: '$white50',
  color: '$foreground',
  backdropFilter: 'blur(10px)',
  // boxShadow: '$lg, $popup',
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
            '@lg': {
              py: '$8',
            },
            a: {
              color: '$foreground',
              textDecoration: 'none',
            },
            '&>a #peepee': {
              p: '$2',
              fontWeight: '$bold',
              color: '$foreground',
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
                fontFamily: '$inter',
                fontWeight: '$bold',
                letterSpacing: '-1px',
                gap: '$4',
              }}
            >
              <Img src={logo} alt="Ambition logo" css={{ height: '$12' }} />
              <Text size="3xl" id="peepee">
                <Text>ambition</Text>
                <Text css={{ color: '$grey500' }}>.wtf</Text>
              </Text>
            </Box>
          </Link>
          <Box
            align="centerX"
            css={{
              gap: '$4',
              transition: '$1',
              '&>a': {
                p: '$2',
                fontFamily: '$main',
                fontSize: '$xl',
                fontWeight: '$bold',
                color: '$foreground',
                transition: '$1',
              },
              '&>a:hover': {
                color: '$indigo',
                background: '$felixgreen',
              },
            }}
          >
            <Link>About</Link>
            <Link href={twitter.url} target="_blank">
              <Box css={{ size: '$6' }}>
                <Svg viewBox="0 0 24 24">
                  <path d={twitter.path} fill="currentcolor" />
                </Svg>
              </Box>
            </Link>
          </Box>
        </Box>
      </Content>
    </StyledHeader>
  )
}
