import { createCss } from '@stitches/react'

import { tokens, utils } from './src/theme'

export const { styled, css, theme } = createCss({
  prefix: '',
  theme: { ...tokens },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils,
})
