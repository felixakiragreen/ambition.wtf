<script>
	import { stitch } from '@/ui'

	export let cls = null
	export let css = null
	export let alt = 'image description'
	export let url
	export let style = null
	export let id = null

	const ss = cls || stitch({})
</script>

<img class={ss({ css })} {alt} src={url} {style} {id} />
