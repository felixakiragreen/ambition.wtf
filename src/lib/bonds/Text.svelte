<script lang="ts">
	import { stitch } from '@/ui'
	import Span from '../atoms/Span.svelte'
	import Para from '../atoms/Para.svelte'
	import Heading from '../atoms/Heading.svelte'

	export let as = 'span'

	export let css = null
	export let size = null
	export let mdx = null
	export let look = null

	export let id = null

	const ss = stitch({
		variants: {
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
					fontWeight: '$bold',
				},
				h5: {
					text: '$xl',
					fontWeight: '$bold',
					// mt: '$12',
					// mb: '$4',
				},
				h6: {
					text: '$lg',
					fontWeight: '$bold',
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
			look: {
				subtitle: {
					color: '$gold',
					textTransform: 'uppercase',
					fontWeight: '$semi',
				},
				mono: {
					textTransform: 'uppercase',
					fontFamily: '$mono',
				},
			},
		},
	})
</script>

{#if as.startsWith('h')}
	<Heading
		cls={ss}
		vrt={{ size, mdx, look }}
		{css}
		h={parseInt(as.slice(-1))}
		{id}>
		<slot />
	</Heading>
{:else if as === 'p'}
	<Para cls={ss} vrt={{ size, mdx, look }} {css}>
		<slot />
	</Para>
{:else}
	<Span cls={ss} vrt={{ size, mdx, look }} {css}>
		<slot />
	</Span>
{/if}
