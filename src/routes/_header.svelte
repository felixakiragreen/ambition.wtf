<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '$lib/atoms/Box.svelte'
	import Image from '$lib/atoms/Image.svelte'
	import Content from '$lib/bonds/Content.svelte'
	import Inline from '$lib/bonds/Inline.svelte'
	import Text from '$lib/bonds/Text.svelte'
	import HeadingLink from '$lib/comps/HeadingLink.svelte'

	import logo from '../assets/ambition_round_flat_border.svg'

	const ss = stitch({
		position: 'sticky',
		top: '$0',
		background: '$background_50',
		color: '$foreground',
		backdropFilter: 'blur(10px)',
	})
</script>

<header class={ss()}>
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
			<Inline
				alignV="center"
				space="md"
				css={{
					fontFamily: '$sans',
					fontWeight: '$black',
				}}>
				<Image
					url={logo}
					alt="Ambition logo"
					css={{
						'@initial': {
							height: '$12',
						},
						'@sm': {
							height: '$16',
						},
					}} />
				<Text
					css={{
						'@initial': {
							text: '$3xl',
						},
						'@sm': {
							text: '$4xl',
						},
					}}>
					<Text>ambition</Text><Text css={{ color: '$grey500' }}>.wtf</Text>
				</Text>
			</Inline>
			<Inline space="md">
				<HeadingLink url="/#why">Why</HeadingLink>
				<HeadingLink url="/#what">What</HeadingLink>
				<HeadingLink url="/#who">Who</HeadingLink>
				<HeadingLink url="/#where">Where</HeadingLink>
			</Inline>
		</Inline>
	</Content>
</header>
