<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Box } from '@/lib/atoms'

	export let id = null
	export let css: CSS = null
	export let pad = null
	export let gap = null
	// export let align = null
	// export let alignV = null

	export let columns: string = null
	export let rows: string = null

	const ss = stitch({
		display: 'grid',

		gridTemplateColumns: columns,
		gridTemplateRows: rows,
		gridGap: '$$Gap',

		variants: {
			pad: {
				no: {
					p: '$no',
				},
				xs: {
					p: '$xs',
				},
				sm: {
					p: '$sm',
				},
				md: {
					p: '$md',
				},
				lg: {
					p: '$lg',
				},
				xl: {
					p: '$xl',
				},
				'2xl': {
					p: '$2xl',
				},
				'3xl': {
					p: '$3xl',
				},
				'4xl': {
					p: '$4xl',
				},
				'5xl': {
					p: '$5xl',
				},
				'6xl': {
					p: '$6xl',
				},
				'7xl': {
					p: '$7xl',
				},
				'8xl': {
					p: '$8xl',
				},
				'9xl': {
					p: '$9xl',
				},
			},
			gap: {
				no: {
					$$Gap: '$space$no',
				},
				xs: {
					$$Gap: '$space$xs',
				},
				sm: {
					$$Gap: '$space$sm',
				},
				md: {
					$$Gap: '$space$md',
				},
				lg: {
					$$Gap: '$space$lg',
				},
				xl: {
					$$Gap: '$space$xl',
				},
				'2xl': {
					$$Gap: '$space$2xl',
				},
				'3xl': {
					$$Gap: '$space$3xl',
				},
				'4xl': {
					$$Gap: '$space$4xl',
				},
				'5xl': {
					$$Gap: '$space$5xl',
				},
				'6xl': {
					$$Gap: '$space$6xl',
				},
				'7xl': {
					$$Gap: '$space$7xl',
				},
				'8xl': {
					$$Gap: '$space$8xl',
				},
				'9xl': {
					$$Gap: '$space$9xl',
				},
			},
			// align: {
			// 	leading: {
			// 		alignItems: 'start',
			// 	},
			// 	trailing: {
			// 		alignItems: 'end',
			// 	},
			// 	center: {
			// 		alignItems: 'center',
			// 	},
			// 	baseline: {
			// 		alignItems: 'baseline',
			// 	},
			// },
			// alignV: {
			// 	top: {
			// 		justifyContent: 'start',
			// 	},
			// 	bottom: {
			// 		justifyContent: 'end',
			// 	},
			// 	center: {
			// 		justifyContent: 'center',
			// 	},
			// },
			// axis: {
			// 	x: {
			// 		h: '$px',
			// 		w: '$full',
			// 	},
			// 	y: {
			// 		h: '$full',
			// 		w: '$px',
			// 	},
			// },
			// color: {
			// 	jaded: {
			// 		bg: '$jaded',
			// 	},
			// 	muted: {
			// 		bg: '$muted',
			// 	},
			// 	clear: {
			// 		bg: '$clear',
			// 	},
			// },
		},
	})
</script>

<Box cls={ss} vrt={{ pad, gap }} {css} {id}>
	<slot />
</Box>
