import { createStitches } from '@stitches/core'
import type * as Stitches from '@stitches/core'

import { tokens, utils } from '@/lib/style/theme'

export const {
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	prefix: '',
	theme: {
		...tokens,
	},
	media: {
		sm: '(min-width: 640px)',
		md: '(min-width: 768px)',
		lg: '(min-width: 1024px)',
		xl: '(min-width: 1280px)',
		'2xl': '(min-width: 1536px)',
	},
	utils,
})

export type { Stitches }

export type CSS = Stitches.CSS<typeof config>
