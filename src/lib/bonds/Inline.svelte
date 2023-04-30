<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Box } from '@/lib/atoms'

	export let id: string | null = null
	export let css: CSS = {}
	export let pad: string | null = null
	export let gap: string | null = null
	export let gapV: string | null = null
	export let align: string | null = null
	export let alignV: string | null = null
	export let collapseBelow: string | null = null

	// TODO: fix that when collapsed, alignV is actually alignH

	// ADD hide=below sm, md, lg to these

	const ss = stitch({
		display: 'flex',

		sx: '$$SpaceX',
		sy: '$$SpaceY',

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
					$$SpaceX: '$space$no',
				},
				xs: {
					$$SpaceX: '$space$xs',
				},
				sm: {
					$$SpaceX: '$space$sm',
				},
				md: {
					$$SpaceX: '$space$md',
				},
				lg: {
					$$SpaceX: '$space$lg',
				},
				xl: {
					$$SpaceX: '$space$xl',
				},
				'2xl': {
					$$SpaceX: '$space$2xl',
				},
				'3xl': {
					$$SpaceX: '$space$3xl',
				},
				'4xl': {
					$$SpaceX: '$space$4xl',
				},
				'5xl': {
					$$SpaceX: '$space$5xl',
				},
				'6xl': {
					$$SpaceX: '$space$6xl',
				},
				'7xl': {
					$$SpaceX: '$space$7xl',
				},
				'8xl': {
					$$SpaceX: '$space$8xl',
				},
				'9xl': {
					$$SpaceX: '$space$9xl',
				},
			},
			gapV: {
				no: {
					$$SpaceY: '$space$no',
				},
				xs: {
					$$SpaceY: '$space$xs',
				},
				sm: {
					$$SpaceY: '$space$sm',
				},
				md: {
					$$SpaceY: '$space$md',
				},
				lg: {
					$$SpaceY: '$space$lg',
				},
				xl: {
					$$SpaceY: '$space$xl',
				},
				'2xl': {
					$$SpaceY: '$space$2xl',
				},
				'3xl': {
					$$SpaceY: '$space$3xl',
				},
				'4xl': {
					$$SpaceY: '$space$4xl',
				},
				'5xl': {
					$$SpaceY: '$space$5xl',
				},
				'6xl': {
					$$SpaceY: '$space$6xl',
				},
				'7xl': {
					$$SpaceY: '$space$7xl',
				},
				'8xl': {
					$$SpaceY: '$space$8xl',
				},
				'9xl': {
					$$SpaceY: '$space$9xl',
				},
			},
			align: {
				leading: {
					justifyContent: 'flex-start',
				},
				trailing: {
					justifyContent: 'flex-end',
				},
				center: {
					justifyContent: 'center',
				},
				between: {
					justifyContent: 'space-between',
				},
			},
			alignV: {
				top: {
					alignItems: 'flex-start',
				},
				bottom: {
					alignItems: 'flex-end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			collapseBelow: {
				sm: {
					flexDirection: 'column',
					'@sm': {
						flexDirection: 'row',
						// $$SpaceX: '$space$0',
						// sy: '$0',
					},
				},
				md: {
					flexDirection: 'column',
					'@md': {
						flexDirection: 'row',
						// sy: '$0',
					},
				},
				lg: {
					flexDirection: 'column',
					'@lg': {
						flexDirection: 'row',
						// sy: '$0',
					},
				},
			},
		},

		// defaultVariants: {
		// 	space: 'no',
		// 	// align: 'leading',
		// },

		// TODO: Need to figure out a better way to do this
		compoundVariants: [
			// {
			// 	collapseBelow: 'md',
			// 	align: 'center',
			// 	css: {
			// 			alignItems: 'center',
			// 		'@md': {
			// 			justifyContent: 'center',
			// 		},
			// 	},
			// },
			// {
			// 	collapseBelow: 'md',
			// 	space: 'xl',
			// 	css: {
			// 			sy: '$8',
			// 			bg: '$red400',
			// 		'@lg': {
			// 			sy: '$0',
			// 			bg: '$orange400',
			// 		},
			// 	},
			// },
		],
	})

	// ss({ css })

	// console.log({ css }, ss({ color, css }))

	// space & spaceV
	// if collapse below,
</script>

<Box cls={ss} vrt={{ pad, gap, gapV, align, alignV, collapseBelow }} {css} {id}>
	<slot />
</Box>
