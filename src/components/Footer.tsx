import React from 'react'
import { styled } from '../ui'

import { Content, Box, Img } from './Box'
import { Text, Link } from './Text'
import { HexIcon } from './Hexagon'

import { socials } from '../content/SocialLinks'

import logo from '../assets/ambition_sharp_flat_border.svg'

export const StyledFooter = styled('footer', {
  background: '$background',
  color: '$foreground',
})

export const Footer: React.FC = ({ children }) => {
  return (
    <StyledFooter>
      <Content>
        <Box align="centerX" justify="spaceBetweenX">
          <Box align="centerX" spacing="x">
            {socials.map((social) => (
              <HexIcon key={social.title} {...social} />
            ))}
          </Box>
          <Box>
            <Link href="http://ambition.wtf" target="_blank">
              <Img src={logo} alt="Ambition logo" css={{ height: '$48' }} />
            </Link>
          </Box>
        </Box>
      </Content>
    </StyledFooter>
  )
}
