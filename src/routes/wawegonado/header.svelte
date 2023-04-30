<script lang="ts">
	import { stitch } from '@/ui'

	import { Image } from '@/lib/atoms'
	import { Content, Inline, Text, Link, HeaderLink } from '@/lib/bonds'

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
							'@initial': {
								height: '$12',
							},
							'@sm': {
								height: '$16',
							},
						}}
					/>
					<Text
						css={{
							'@initial': {
								text: '$3xl',
							},
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
				<HeaderLink url="/wawegonado">WaWeGonaDo‽</HeaderLink>
				<HeaderLink url="/wawegonado#support">Support</HeaderLink>
				<HeaderLink url="/wawegonado/privacy">Privacy</HeaderLink>
			</Inline>
		</Inline>
	</Content>
</header>
