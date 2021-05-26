<script lang="ts">
	import { stitch } from '@/ui'

	import Image from '$lib/atoms/Image.svelte'
	import Content from '$lib/bonds/Content.svelte'
	import Inline from '$lib/bonds/Inline.svelte'
	import Stack from '$lib/bonds/Stack.svelte'
	import HeadingExtra from '$lib/comps/HeadingExtra.svelte'
	import Socials from '$lib/comps/Socials.svelte'
	import HeadingUnderline from '$lib/comps/HeadingUnderline.svelte'

	import logo from '../assets/ambition_round_gradient_clean.svg'

	const ss = stitch({
		bg: '$mirage',
	})
</script>

<footer class={ss()}>
	<Content>
		<Inline
			collapseBelow="md"
			align="center"
			spaceV="sm"
			css={{
				justifyContent: 'space-between',
				'@initial': {
					py: '$0',
				},
				'@sm': {
					py: '$2',
				},
				'@md': {
					py: '$4',
				},
			}}>
			<Stack align="center" space="md">
				<HeadingUnderline id="where">
					Where The Fuck <HeadingExtra content="(Socials)" />
				</HeadingUnderline>
				<Socials size="xl" space="no" />
			</Stack>
			<Image
				url={logo}
				alt="Ambition logo"
				css={{
					my: '$16',
					height: '$48',
				}} />
		</Inline>
	</Content>
</footer>
