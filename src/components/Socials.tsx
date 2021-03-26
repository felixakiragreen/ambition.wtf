import React from 'react'
import { styled } from '../ui'

import { Box } from './Box'
import { Link } from './Text'
import { HexIcon, RoundedHexagon } from './Hexagon'
import { Svg } from './Svg'

import { socials, twitter } from '../content/SocialLinks'

import { SocialLink } from '../types'

export const Socials: React.FC = ({ children }) => {
  return (
    <Box align="centerX" spacing="x">
      {socials.map((social) => (
        <HexIcon key={social.title} {...social} />
      ))}
    </Box>
  )
}

export const SocialTwitter: React.FC<SocialLink> = ({ url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      css={{
        p: '$2',
        color: '$felixgreen',
        textDecoration: 'none',
        display: 'inline-block',
        '&:hover': {
          backgroundColor: '$felixgreen',
          color: '$indigo',
          cursor: 'pointer',
        },
      }}
    >
      <Box css={{ size: '$6' }}>
        <Svg viewBox="0 0 24 24">
          <path d={twitter.path} fill="currentcolor" />
        </Svg>
      </Box>
    </Link>
  )
}

export const StyledSocialHexIcon = styled('a', {
  display: 'flex',
  size: '$12',
  // transition: '$1',
  color: '$background',
  cursor: 'pointer',

  svg: {
    transition: '$1', // NEEDED
    fill: '$felixgreen',
  },
  '&:hover': {
    svg: {
      color: '$felixgreen',
      '#foreground': {
        fill: '$indigo',
      },
    },
  },
})
export const SocialHexIcon: React.FC<SocialLink> = ({
  url,
  hex,
  path,
  transform,
}) => {
  return (
    <StyledSocialHexIcon href={url} target="_blank">
      <RoundedHexagon fill="currentcolor">
        <g
          transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
        >
          <path d={path} id="foreground" />
        </g>
      </RoundedHexagon>
    </StyledSocialHexIcon>
  )
}
