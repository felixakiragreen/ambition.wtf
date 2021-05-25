<script lang="ts">
	import Text from '../bonds/Text.svelte'

	export let content
</script>

<Text css={{ '&:before': { content: `${content}`, color: '$grey500' } }} />
