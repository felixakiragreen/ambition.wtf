import React from 'react'
import { styled } from '../ui'

import { Svg } from './Svg'

import { SocialLink } from '../types'

type HexagonProps = {
  fill: string
}

export const Hexagon: React.FC<HexagonProps> = ({ children, fill }) => {
  // x="0%" y="0%" width="100%" height="100%"
  return (
    <Svg viewBox="0 0 36 36">
      <path fill="none" d="M0 0H36V36H0z" />
      <path d="M18 0l15.588 9v18L18 36 2.412 27V9L18 0z" fill={fill} />
      {children}
    </Svg>
  )
}

export const StyledIcon = styled('a', {
  display: 'flex',
  size: '$16',
  transition: '$1',
  color: '$blue200',

  svg: {
    '#foreground': {
      fill: '$white',
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
    <StyledIcon
      href={url}
      target="_blank"
      css={{ color: `#${hex}`, '&:hover': { color: '$felixgreen' } }}
    >
      <Hexagon fill="currentcolor">
        <g
          transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
        >
          <path d={path} id="foreground" />
        </g>
      </Hexagon>
    </StyledIcon>
  )
}
