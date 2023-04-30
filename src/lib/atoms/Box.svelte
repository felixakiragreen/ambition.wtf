<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	export let id = null
	export let cls = null
	export let css: CSS = null
	export let style = null
	export let vrt = {}

	const ss = cls || stitch({})
</script>

<div class={ss({ ...vrt, css })} {style} {id}>
	<slot />
</div>
