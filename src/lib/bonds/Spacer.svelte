<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Box } from '@/lib/atoms'

	export let id = null
	export let css: CSS = null

	type Axis = 'x' | 'y'

	export let axis: Axis = 'x'
	export let color = 'muted'

	const ss = stitch({
		variants: {
			axis: {
				x: {
					h: '$px',
					w: '$full',
				},
				y: {
					// h: '$full',
					w: '$px',
				},
			},
			color: {
				dusky: {
					bg: '$dusky',
				},
				muted: {
					bg: '$muted',
				},
				jaded: {
					bg: '$jaded',
				},
				faded: {
					bg: '$faded',
				},
				faint: {
					bg: '$faint',
				},
				clear: {
					bg: '$clear',
				},
			},
		},
	})
</script>

<Box cls={ss} vrt={{ axis, color }} {css} {id}>
	<slot />
</Box>
