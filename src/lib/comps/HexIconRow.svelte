<script lang="ts">
	import HexIcon from '../bonds/HexIcon.svelte'
	import Inline from '../bonds/Inline.svelte'

	export let socials
	export let look

	export let space = 'sm'
	export let align = null
	export let size = 'md'
	export let css = null

	const iconSizes = {
		sm: '$8',
		md: '$12',
		lg: '$16',
		xl: '$20',
		'2xl': '$24',
	}

	$: iconSize = iconSizes[size] || size

	$: cssInl = css || { '> *': { size: iconSize } }
</script>

<Inline css={cssInl} {space} {align}>
	{#each socials as social}
		{#if social?.service === 'email'}
			<HexIcon {...social} look="felix" />
		{:else}
			<HexIcon {...social} {look} />
		{/if}
	{/each}
</Inline>
