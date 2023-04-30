<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	export let id = null
	export let cls = null
	export let css: CSS = null
	export let style = null
	export let vrt = {}

	export let url
	export let fileName = undefined
	let download = fileName
	export let newTab = false
	let target = newTab ? '_blank' : '_self'

	const ss = cls || stitch({})
</script>

<a
	href={url}
	{download}
	{target}
	class={ss({ ...vrt, css })}
	{style}
	{id}
	on:click
>
	<slot />
</a>
