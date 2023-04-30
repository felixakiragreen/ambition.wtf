<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Box } from '@/lib/atoms'

	export let css: CSS = null
	export let below = null
	export let above = null
	export let inline = true

	const ss = stitch({
		// display: 'flex',

		variants: {
			inline: {
				true: {
					display: 'inline-block',
				},
				false: {
					display: 'block',
				},
			},
			below: {
				sm: {
					display: 'none',
					'@sm': {
						display: 'initial',
					},
				},
				md: {
					display: 'none',
					'@md': {
						display: 'initial',
					},
				},
				lg: {
					display: 'none',
					'@lg': {
						display: 'initial',
					},
				},
			},
			above: {
				sm: {
					display: 'initial',
					'@sm': {
						display: 'none',
					},
				},
				md: {
					display: 'initial',
					'@md': {
						display: 'none',
					},
				},
				lg: {
					display: 'initial',
					'@lg': {
						display: 'none',
					},
				},
			},
		},
	})
</script>

<Box cls={ss} vrt={{ inline, above, below }} {css}>
	<slot />
</Box>
