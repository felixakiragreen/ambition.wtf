import React from 'react'
import { styled } from '../ui'

export const Text = styled('span', {
  variants: {
    size: {
      xs: {
        text: '$xs',
      },
      sm: {
        text: '$sm',
      },
      base: {
        text: '$base',
      },
      lg: {
        text: '$lg',
      },
      xl: {
        text: '$xl',
      },
      '2xl': {
        text: '$2xl',
      },
      '3xl': {
        text: '$3xl',
      },
      '4xl': {
        text: '$4xl',
      },
      '5xl': {
        text: '$5xl',
      },
      '6xl': {
        text: '$6xl',
      },
      '7xl': {
        text: '$7xl',
      },
      '8xl': {
        text: '$8xl',
      },
      '9xl': {
        text: '$9xl',
      },
    },
    mdx: {
      h1: {
        text: '$5xl',
        fontFamily: '$main',
        fontWeight: '$bold',
      },
      h2: {
        text: '$4xl',
        fontFamily: '$main',
        fontWeight: '$bold',
      },
      h3: {
        text: '$3xl',
        fontFamily: '$main',
        fontWeight: '$bold',
      },
      h4: {
        text: '$2xl',
        fontFamily: '$main',
        fontWeight: '$bold',
      },
      h5: {
        text: '$xl',
        fontFamily: '$main',
        fontWeight: '$bold',
      },
      h6: {
        text: '$lg',
        fontFamily: '$main',
        fontWeight: '$bold',
      },
      p: {
        display: 'block',
        py: '$2',
        text: '$lg',
        fontFamily: '$mono',
        lineHeight: '$2xl',
      },
      a: {
        text: '$lg',
        fontWeight: '$bold',
        color: '$indigo',
        textDecoration: 'none',
        display: 'inline-block',
        '&:hover': {
          backgroundColor: '$felixgreen',
          color: '$indigo',
          cursor: 'pointer',
        },
      },
    },
  },
})

export const Link: React.FC = (props) => (
  <Text as="a" css={{ cursor: 'pointer' }} {...props} />
)

export const MonoHeading = styled(Text, {
  textTransform: "uppercase",
  fontFamily: '$mono',
})

export const UnderlinedHeading: React.FC = (props) => (
  <MonoHeading as="h3" css={{ pb: '$4', borderBottom: "2px solid $felixgreen" }} {...props} />
)

export const ExtraHeading: React.FC = ({ children }) => (
  <Text css={{ "&:before": { 
    content: `${children}`,
    color: "$grey500"
  }}} />
)
