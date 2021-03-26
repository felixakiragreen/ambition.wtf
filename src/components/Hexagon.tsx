import React from 'react'
import { styled } from '../ui'

import { Svg } from './Svg'

import { SocialLink } from '../types'

type HexagonProps = {
  fill: string
}

export const Hexagon: React.FC<HexagonProps> = ({ children, fill }) => {
  return (
    <Svg viewBox="0 0 36 36" width="100%" height="100%">
      <path fill="none" d="M0 0H36V36H0z" />
      <path fill={fill} d="M18 0l15.588 9v18L18 36 2.412 27V9L18 0z" />
      {children}
    </Svg>
  )
}

export const RoundedHexagon: React.FC<HexagonProps> = ({ children, fill }) => {
  return (
    <Svg viewBox="0 0 36 36" width="100%" height="100%">
      <path fill="none" d="M0 0H36V36H0z" />
      <path
        fill={fill}
        d="M17.1.52a1.798 1.798 0 011.8 0l13.788 7.96c.557.322.9.916.9 1.559v15.922a1.8 1.8 0 01-.9 1.559L18.9 35.48a1.798 1.798 0 01-1.8 0L3.312 27.52a1.8 1.8 0 01-.9-1.559V10.039a1.8 1.8 0 01.9-1.559L17.1.52z"
      />
      {children}
    </Svg>
  )
}

// TODO: I think this should be moved...

export const StyledHexIcon = styled('a', {
  display: 'flex',
  size: '$16',

  svg: {
    transition: '$1', // NEEDED
    '#foreground': {
      fill: '$black',
    },
  },
  '&:hover': {
    svg: {
      '#foreground': {
        fill: '$indigo',
      },
    },
  },
})

export const HexIcon: React.FC<SocialLink> = ({
  url,
  hex,
  path,
  transform,
}) => {
  return (
    <StyledHexIcon
      href={url}
      target="_blank"
      css={{ color: `#${hex}`, '&:hover': { color: '$felixgreen' } }}
    >
      <RoundedHexagon fill={'currentColor'}>
        <g
          transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
        >
          <path d={path} id="foreground" />
        </g>
      </RoundedHexagon>
    </StyledHexIcon>
  )
}
