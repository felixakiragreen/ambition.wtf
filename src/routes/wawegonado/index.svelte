<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Content from '@/lib/bonds/Content.svelte'
	import Text from '@/lib/bonds/Text.svelte'

	import Image from '@/lib/atoms/Image.svelte'
	import Link from '@/lib/bonds/Link.svelte'
	import Stack from '@/lib/bonds/Stack.svelte'

	import HeadingExtra from '$lib/comps/HeadingExtra.svelte'
	import HeadingUnderline from '$lib/comps/HeadingUnderline.svelte'
	import About from '$lib/comps/About.svelte'
	import Projects from '$lib/comps/Projects.svelte'
	import Team from '$lib/comps/Team.svelte'

	import wawegonado from '../../assets/hero_wawegonado.png'

	import PrivacyWawegonado from '@/lib/comps/PrivacyWawegonado.svelte'
	// import PrivacyMd from './Privacy.md'

	const ss = stitch({
		bg: '$background',
		color: '$foreground',
		fontFamily: '$mono',

		// '& h2': {
		// 	bg: '$red400',
		// },
	})

	const ssAlt = stitch({
		bg: '$mirage',
	})
</script>

<Box cls={ss}>
	<Content>
		<Image url={wawegonado} css={{ width: '100%', pb: '$8' }} />

		<Text
			><Text css={{ fontWeight: '$bold', color: '#ec008c' }}>WaWeGonaDo‽</Text> makes
			group decision-making easy, fair, and way less painful. With WaWeGonaDo, text
			a list of options to your friends to rank them with a fun A versus B style
			battle. See everyone’s top choice and get an instant run-off vote of the overall
			highest ranked choice.<br /><br />

			WaWeGonaDo streamlines the entire process with no fluff or unnecessary
			options — just press a button to create a poll, type out the options, and
			confirm to send. Answering a poll is becomes a fun game with haptics and
			animations that make ranking easy and enjoyable.<br /><br />

			Open WaWeGonaDo from inside the Messages app or as a standalone app. Polls
			and votes are stored in the public iCloud database to ensure they aren't
			lost. While voting is limited to a maximum of 6 options and requires
			iCloud data to be turned on, WaWeGonaDo is the perfect choice for anyone
			who wants a fun and fair way to make group decisions.<br /><br />

			Why settle for boring group decisions when you can have fun with
			WaWeGonaDo Download now and start making the most fair and enjoyable
			decisions with your friends!<br /><br />
		</Text>
		<HeadingUnderline id="privacy">
			Support <HeadingExtra content="(Bugs / Requests)" />
		</HeadingUnderline>

		<Text>
			If you encounter any bugs or have any ideas for new features there are
			many ways to reach to us. Our preferred method is through our Discord
			community, where we have a bugs & features channel. You can also Tweet at
			or DM any of our social media accounts. However, if none of those methods
			are available, you can always do it the old fashioned way by sending an
			email to this address: email at ambition.wtf.
		</Text>

		<HeadingUnderline id="privacy">
			Privacy <HeadingExtra content="(Policy)" />
		</HeadingUnderline>

		<PrivacyWawegonado />
		<!-- <PrivacyMd /> -->
	</Content>
</Box>
