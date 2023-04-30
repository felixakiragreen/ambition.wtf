<script lang="ts">
	import Button from './Button.svelte'
	import Inline from './Inline.svelte'
	import LinkIconSocial from './LinkIconSocial.svelte'
	import type { SocialLink } from '@/types'

	export let socials: SocialLink[]

	export let space = 'sm'
	export let align = null
	export let size = 'md'
	export let css = null

	// variants
	export let symbol = null
	export let ground = null
	export let hoverSymbol = null
	export let hoverGround = null

	const iconSizes = {
		sm: '$8',
		md: '$12',
		lg: '$16',
		xl: '$20',
		'2xl': '$24',
	}

	$: iconSize = iconSizes[size] || size

	$: cssInl = css
		? { ...css, '> *': { size: iconSize } }
		: { '> *': { size: iconSize } }
</script>

<Inline css={cssInl} {space} {align}>
	{#each socials as { url, hex, hue, path, transform }}
		<Button look="clean" size="no">
			<LinkIconSocial
				{...{ symbol, ground, hoverSymbol, hoverGround }}
				{...{
					url,
					hex,
					hue,
					path,
					transform,
				}}
			/>
		</Button>
	{/each}
</Inline>
