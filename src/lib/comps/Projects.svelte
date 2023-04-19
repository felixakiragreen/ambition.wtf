<script>
	import Box from '../atoms/Box.svelte'
	import Image from '../atoms/Image.svelte'
	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'
	import Stack from '../bonds/Stack.svelte'

	// import fuckyous from '../../assets/hero_fuckyous.png'
	// import edworm from '../../assets/hero_edworm.gif'
	// import artsee from '../../assets/hero_artsee.jpg'
	// import junks from '../../assets/hero_cryptojunks.png'
	// import hexis from '../../assets/hero_hexis.jpg'
	import golos from '../../assets/hero_golos.png'
	import wawegonado from '../../assets/hero_wawegonado.png'
	import visaviz from '../../assets/hero_visaviz.png'
	import taxes from '../../assets/hero_taxes.png'
</script>

<Stack
	space="xl"
	css={{
		pb: '$24',
		lineHeight: '$lg',
	}}>
	<Box css={{ height: '$8' }} />

	<Link url={'https://playgolos.com'} newTab look="clean">
	<Image url={golos} css={{ width: '100%' }} />
	</Link>
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '$orange300' }}>GOLOS</Text> ⬡ iOS app : gamified life tracker
	</Text>
	<Text
		>Game of Life Operating System — An attempt at creating a game-like interface for living life.<br /><br />A project Felix been working on for as long as memory lasts, currently on the 6th major iteration of prototypes. Coming to the App Store Summer 2023.<br /><br />
		Download the <Link
			url={'https://testflight.apple.com/join/yHnrcDTt'}
			newTab
			look="blockinho">TestFlight</Link
		> beta.</Text>

	<Box css={{ height: '$16' }} />

	<Image url={wawegonado} css={{ width: '100%' }} />
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '#ec008c' }}>WaWeGonaDo‽</Text> ⬡ iOS app : ranked choice
		voting + friends</Text>
	<Text
		>A messaging app for helping your group of friends make decisions in the most democratic way possible. As a bonus, it animates how the Ranked Voice Alternative Vote Run-off process works. Coming to the App Store Spring 2023.<br /><br />
		Download the <Link
			url={'https://testflight.apple.com/join/t9pdbDT6'}
			newTab
			look="blockinho">TestFlight</Link
		> beta.</Text>

	<Box css={{ height: '$16' }} />

	<Image url={visaviz} css={{ width: '100%' }} />
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '$blue300' }}>VisaViz</Text> ⬡ macOS app : data-viz + twitter
		archive</Text>
	<Text
		>A tool for (data) visualizing ALL of a person's tweets. Inspired by
		<Link
			url={'https://twitter.com/visakanv'}
			newTab
			look="blockinho">@VisakanV</Link>, this app will load your Twitter archive and display all of your
		tweets in a giant grid. It's color-coded by person and likes + retweets.
		<br /><br />Download the app from
		<Link
			url={'https://github.com/felixakiragreen/visaviz/releases'}
			newTab
			look="blockinho">Github</Link
		>.</Text>

	<Box css={{ height: '$16' }} />

	<Image url={taxes} css={{ width: '100%' }} />
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '$yellow300' }}>Unnamed</Text> ⬡ scripts : AI + taxes</Text>
	<Text
		>Do you hate doing your taxes or paying someone else too much money to do them for you? We're building a library to automate this process once and for all. Coming 2024.</Text>

	<Box css={{ height: '$16' }} />
</Stack>
