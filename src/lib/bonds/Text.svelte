<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'
	import { baseColors } from '@/types'

	import { Span, Para, Heading } from '@/lib/atoms'

	export let as = 'span'

	export let id = null
	export let css: CSS = null

	export let look = null
	export let br = null
	export let nobr = null
	export let size = null
	export let color = null
	export let align = null
	export let mdx = null

	const ss = stitch({
		variants: {
			look: {
				heading: {
					text: '$2xl',
					// textTransform: 'uppercase',
					fontWeight: '$black',
					fontFamily: '$main',
					'@md': {
						text: '$3xl',
					},
				},
				subheading: {
					text: '$xl',
					// textTransform: 'uppercase',
					fontWeight: '$bold',
					fontFamily: '$main',
				},
				subheading2: {
					text: '$lg',
					// textTransform: 'uppercase',
					fontWeight: '$bold',
					fontFamily: '$main',
				},
				mono: {
					// textTransform: 'uppercase',
					fontFamily: '$mono',
				},
				italic: {
					fontStyle: 'italic',
				},
			},
			// TODO: maybe breakpoints could be better
			br: {
				// breakpoints break
				true: {
					wordBreak: 'break-all',
				},
			},
			nobr: {
				true: {
					whiteSpace: 'nowrap',
				},
			},

			//
			// defaults
			//

			size: {
				xs: {
					text: '$xs',
				},
				sm: {
					text: '$sm',
				},
				md: {
					text: '$md',
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
			color: {
				muted: {
					color: '$muted',
				},
				// TODO: this might need to handle 400, darker, lighter
				...baseColors.reduce(
					(acc, color) => ({
						...acc,
						[color]: {
							color: `$${color}400`,
						},
					}),
					{},
				),
			},
			align: {
				center: {
					textAlign: 'center',
				},
			},
			mdx: {
				h1: {
					fontWeight: '$bold',
					'@initial': {
						text: '$4xl',
					},
					'@md': {
						text: '$5xl',
					},
				},
				h2: {
					fontWeight: '$bold',
					my: '$3',
					'@initial': {
						text: '$3xl',
					},
					'@md': {
						text: '$4xl',
					},
				},
				h3: {
					fontWeight: '$bold',
					'@initial': {
						text: '$2xl',
					},
					'@md': {
						text: '$3xl',
					},
				},
				h4: {
					text: '$2xl',
					'@initial': {
						text: '$xl',
					},
					'@md': {
						text: '$2xl',
					},
				},
				h5: {
					fontWeight: '$bold',
					'@initial': {
						text: '$lg',
					},
					'@md': {
						text: '$xl',
					},
				},
				h6: {
					fontWeight: '$bold',
					'@initial': {
						text: '$md',
					},
					'@md': {
						text: '$lg',
					},
				},
				p: {
					display: 'block',
					py: '$2',
					// text: '$lg',
					// fontWeight: '$semi',
					lineHeight: '$lg',
					'@initial': {
						text: '$sm',
					},
					'@sm': {
						text: '$md',
					},
					'@md': {
						text: '$lg',
					},
				},
				a: {
					text: '$lg',
					fontWeight: '$bold',
					color: '$highlight',
					textDecoration: 'none',
					display: 'inline-block',
					transition: '$1',
					'&:hover': {
						// backgroundColor: '$felixgreen',
						// color: '$indigo',
						backgroundColor: '$highlight',
						color: '$lowlight',
						cursor: 'pointer',
						px: '$1',
						mx: '$-1',
					},
				},
				ul: {
					display: 'block',
					py: '$2',
					text: '$lg',
					fontFamily: '$main',
					// fontWeight: '$semi',
					// lineHeight: '$2xl',
				},
				li: {
					fontWeight: '$semi',
				},
			},
		},
	})
</script>

{#if as.startsWith('h')}
	<Heading
		cls={ss}
		vrt={{ size, color, align, mdx, look, br, nobr }}
		{css}
		h={parseInt(as.slice(-1))}
		{id}
	>
		<slot />
	</Heading>
{:else if as === 'p'}
	<Para cls={ss} vrt={{ size, color, align, mdx, look, br, nobr }} {css}>
		<slot />
	</Para>
{:else}
	<Span cls={ss} vrt={{ size, color, align, mdx, look, br, nobr }} {css}>
		<slot />
	</Span>
{/if}
