<script lang="ts">
	import Link from './Link.svelte'
	import Button from './Button.svelte'

	export let url
	export let fileName = undefined
	export let newTab = false

	// export let css = null
	// export let look = 'main'
	// export let size = 'md'
	// export let rounding = 'none'
	// export let disabled = null
</script>

<Link {url} {fileName} {newTab} on:click look="clean">
	<Button {...$$props}>
		<slot />
	</Button>
</Link>
