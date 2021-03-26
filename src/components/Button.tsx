import { styled } from '../ui'

export const Button = styled('button', {
  fontFamily: '$sans',
  backgroundColor: '$indigo',
  color: '$white',
  borderRadius: '9999px',
  fontWeight: '$bold',
  border: '0',

  textTransform: 'uppercase',
  transition: '$1',

  // TODO: disabled

  variants: {
    size: {
      md: {
        text: '$base',
        py: '$1',
        px: '$5',
      },
      lg: {
        text: '$2xl',
        py: '$3',
        px: '$10',
      },
    },
  },

  // Pseudo-class selector
  '&:hover:enabled': {
    backgroundColor: '$felixgreen',
    color: '$indigo',
    cursor: 'pointer',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
  },

  // position: 'relative',
  // Pseudo-element selector
  // '::before': {
  //   content: `""`,
  //   display: 'block',
  //   backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
  //   position: 'absolute',
  //   top: '-3px',
  //   left: '-3px',
  //   width: 'calc(100% + 6px)',
  //   height: 'calc(100% + 6px)',
  //   borderRadius: 'inherit',
  //   zIndex: -1,
  // },
})
