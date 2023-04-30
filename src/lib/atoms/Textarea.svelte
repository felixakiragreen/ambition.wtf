<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	export let id = null
	export let cls = null
	export let css: CSS = null
	export let style = null
	export let vrt = {}

	export let value = ''
	export let placeholder = ''
	export let lines = null
	let rows = lines !== null ? lines : undefined

	const ss = cls || stitch({})
</script>

<textarea
	class={ss({ ...vrt, css })}
	{style}
	{id}
	bind:value
	on:input
	on:change
	on:blur
	{placeholder}
	{rows}
/>
