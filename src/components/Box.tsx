import { styled } from '../ui'

export const Box = styled('div', {
  // defaultVariants: {
  //   direction: 'h',
  // },
  variants: {
    direction: {
      h: {
        display: 'flex',
        flexDirection: 'row',
      },
      v: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    padding: {
      all: {
        p: '$4',
      },
      x: {
        py: '$4',
      },
      y: {
        py: '$4',
      },
    },
    spacing: {
      x: {
        '@initial': {
          sx: '$2',
        },
        '@md': {
          sx: '$4',
        },
      },
      y: {
        '@initial': {
          sy: '$2',
        },
        '@md': {
          sy: '$4',
        },
      },
    },
    align: {
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      centerX: {
        display: 'flex',
        alignItems: 'center',
      },
      centerY: {
        display: 'flex',
        justifyContent: 'center',
      },
      leading: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
      },
      trailing: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'end',
      },
    },
    justify: {
      spaceBetweenX: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      spaceBetweenY: {
        display: 'flex',
        alignItems: 'space-between',
      },
    },
  },
})

export const Content = styled('div', {
  mx: 'auto',
  maxWidth: '$screen-lg',
  py: '$4',

  '@initial': {
    px: '$4',
  },
  '@sm': {
    px: '$8',
  },
  '@xl': {
    px: '$0',
  },
})

export const Img = styled('img', {})
