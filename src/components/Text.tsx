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
        fontFamily: '$sans',
        fontWeight: '$bold',
      },
      h2: {
        text: '$4xl',
        fontFamily: '$sans',
        fontWeight: '$bold',
      },
      h3: {
        text: '$3xl',
        fontFamily: '$sans',
        fontWeight: '$bold',
      },
      h4: {
        text: '$2xl',
        fontFamily: '$sans',
        fontWeight: '$bold',
      },
      h5: {
        text: '$xl',
        fontFamily: '$sans',
        fontWeight: '$bold',
      },
      h6: {
        text: '$lg',
        fontFamily: '$sans',
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
        color: '$felixgreen',
        textDecoration: 'none',
        display: 'inline-block',
        transition: '$1',
        '&:hover': {
          backgroundColor: '$felixgreen',
          color: '$indigo',
          cursor: 'pointer',
          px: '$1',
          mx: '$-1',
        },
      },
    },
  },
})

export const Link: React.FC = (props) => (
  <Text as="a" css={{ cursor: 'pointer' }} {...props} />
)

export const MonoHeading = styled(Text, {
  textTransform: 'uppercase',
  fontFamily: '$mono',
})

export const UnderlinedHeading: React.FC = (props) => (
  <MonoHeading
    as="h3"
    css={{
      pb: '$4',
      borderBottom: '2px solid $felixgreen',
      pointerEvents: 'none', // necessary to not cover any shit up
      '&:before': {
        content: ' ',
        display: 'block',
        height: '$40' /* fixed header height*/,
        marginTop: '$-40' /* negative fixed header height */,
        visibility: 'hidden',
        zIndex: '-9999',
      },
    }}
    {...props}
  />
)

export const UnderlinedHeadingLink = styled(Link, {
  textTransform: 'uppercase',
  fontFamily: '$mono',
  borderBottom: '2px solid $felixgreen',
  transition: '$1',
  fontWeight: '$bold',
  color: '$foreground',
  py: '$2',

  '&:hover': {
    px: '$2',
    mx: '$-2',
    color: '$indigo',
    background: '$felixgreen',
  },
  '&:after': {
    '@initial': {
      content: '',
    },
    '@md': {
      content: ' tf',
    },
    '@lg': {
      content: ' the fuck',
    },
  },
})

export const ExtraHeading: React.FC = ({ children }) => (
  <Text
    css={{
      '&:before': {
        content: `${children}`,
        color: '$grey500',
      },
    }}
  />
)
