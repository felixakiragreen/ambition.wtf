<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	export let id = null
	export let cls = null
	export let css: CSS = null
	export let style = null

	export let alt = 'image description'
	export let url
	export let url2x = null

	const ss = cls || stitch({})
</script>

<img
	class={ss({ css })}
	{alt}
	src={url}
	{...url2x ? { srcset: `${url2x} 2x` } : {}}
	{style}
	{id}
/>
