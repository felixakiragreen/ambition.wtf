<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	export let id = null
	export let cls = null
	export let css: CSS = null
	export let style = null

	export let url
	export let loop = true
	export let autoPlay = true
	export let type = 'video/mp4'

	const ss = cls || stitch({})
</script>

<video class={ss({ css })} {style} {id} {loop} autoplay={autoPlay}>
	<source src={url} {type} />
	<track default kind="captions" />
</video>
