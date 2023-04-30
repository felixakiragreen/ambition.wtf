<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Box } from '@/lib/atoms'

	export let id = null
	export let css: CSS = null
	export let pad = null
	export let gap = null
	export let align = null
	export let alignV = null

	const ss = stitch({
		display: 'flex',
		flexDirection: 'column',

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
					alignItems: 'flex-start',
				},
				trailing: {
					alignItems: 'flex-end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			alignV: {
				top: {
					justifyContent: 'flex-start',
				},
				bottom: {
					justifyContent: 'flex-end',
				},
				center: {
					justifyContent: 'center',
				},
			},
		},

		// defaultVariants: {
		// 	space: 'no',
		// 	// align: 'leading',
		// },
	})

	// ss({ css })

	// console.log({ css }, ss({ color, css }))
</script>

<Box cls={ss} vrt={{ gap, pad, align, alignV }} {css} {id}>
	<slot />
</Box>
