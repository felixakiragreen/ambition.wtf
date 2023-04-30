<script lang="ts">
	import { stitch } from '@/ui'

	import { Box, Image } from '@/lib/atoms'
	import { Content, Inline, Stack, Text } from '@/lib/bonds'

	import { HeadingExtra, HeadingUnderline, Socials } from '@/lib/cells'

	import logo from '@/assets/ambition_round_gradient_clean.svg'

	const ss = stitch({
		bg: '$mirage',
	})
</script>

<footer class={ss()}>
	<Content>
		<Inline
			collapseBelow="md"
			align="center"
			gapV="sm"
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
			}}
		>
			<Stack align="center" gap="md">
				<HeadingUnderline id="where">
					Where The Fuck <HeadingExtra content="(Socials)" />
				</HeadingUnderline>
				<Socials
					size="xl"
					space="no"
					symbol="bg"
					ground="be"
					hoverSymbol="ll"
					hoverGround="hl"
				/>
			</Stack>
			<Image
				url={logo}
				alt="Ambition logo"
				css={{
					my: '$16',
					height: '$48',
				}}
			/>
		</Inline>
	</Content>
</footer>
