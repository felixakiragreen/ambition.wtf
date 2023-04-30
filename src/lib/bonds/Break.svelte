<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Span } from '@/lib/atoms'

	// as text or as box

	// this component handles all the break points shit for text...

	// export let as = 'span'

	export let css: CSS = null
	export let all = null
	export let no = null
	export let sm = null
	export let md = null

	const ss = stitch({
		variants: {
			all: {
				// breakpoints break
				true: {
					wordBreak: 'break-all',
				},
			},
			no: {
				true: {
					whiteSpace: 'nowrap',
				},
			},
			sm: {
				true: {
					//
					'@md': {
						display: 'none',
					},
				},
			},
			md: {
				true: {
					display: 'none',
					'@md': {
						display: 'initial',
					},
				},
			},
		},
	})
</script>

<Span cls={ss} vrt={{ all, no, sm, md }} {css}>
	{#if $$slots.default}
		<slot />
	{:else}
		<br />
	{/if}
</Span>
