import React from 'react'
import { styled } from '../ui'

import { Content, Box, Img } from './Box'
import { Text, Link, UnderlinedHeading, ExtraHeading } from './Text'
import { HexIcon } from './Hexagon'

import { socials } from '../content/SocialLinks'

import logo from '../assets/ambition_round_gradient_border.svg'

export const StyledFooter = styled('footer', {
  background: '$mirage',
})

export const Footer: React.FC = ({ children }) => {
  return (
    <StyledFooter>
      <Content>
        <Box align="centerX" justify="spaceBetweenX">
          <Box>
            <UnderlinedHeading id="where-the-fuck">
              Where the fuck<ExtraHeading> (Socials)</ExtraHeading>
            </UnderlinedHeading>
            <Box align="centerX" spacing="x">
              {socials.map((social) => (
                <HexIcon key={social.title} {...social} />
              ))}
            </Box>
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
