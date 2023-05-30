<script lang="ts">
	import { stitch } from '@/ui'

	import { Image } from '@/lib/atoms'
	import { Content, Inline, Text, Link } from '@/lib/bonds'
	import { HeadingLink } from '@/lib/cells'

	import logo from '@/assets/ambition_round_flat_border.svg'

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
			<Link url="/" look="clean">
				<Inline
					alignV="center"
					gap="md"
					css={{
						fontFamily: '$sans',
						fontWeight: '$black',
					}}
				>
					<Image
						url={logo}
						alt="Ambition logo"
						css={{
							height: '$12',
							'@sm': {
								height: '$16',
							},
						}}
					/>
					<Text
						css={{
							text: '$3xl',
							'@sm': {
								text: '$4xl',
							},
						}}
					>
						<Text>ambition</Text><Text css={{ color: '$grey500' }}>.wtf</Text>
					</Text>
				</Inline>
			</Link>
			<Inline gap="md">
				<HeadingLink url="/#why">Why</HeadingLink>
				<HeadingLink url="/#what">What</HeadingLink>
				<HeadingLink url="/#who">Who</HeadingLink>
				<HeadingLink url="/#where">Where</HeadingLink>
			</Inline>
		</Inline>
	</Content>
</header>
