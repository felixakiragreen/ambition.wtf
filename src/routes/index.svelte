<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '@/lib/atoms/Box.svelte'
	import Content from '@/lib/bonds/Content.svelte'

	import HeadingExtra from '$lib/comps/HeadingExtra.svelte'
	import HeadingUnderline from '$lib/comps/HeadingUnderline.svelte'
	import Projects from '$lib/comps/Projects.svelte'
	import Team from '$lib/comps/Team.svelte'

	import Why from './_landing/Why.md'

	const ss = stitch({
		bg: '$background',
		color: '$foreground',
		fontFamily: '$mono',

		'& h2': {
			bg: '$red400',
		},
	})

	const ssAlt = stitch({
		bg: '$mirage',
	})
</script>

<Box cls={ss}>
	<Content>
		<HeadingUnderline id="why">
			Why The Fuck <HeadingExtra content="(About)" />
		</HeadingUnderline>
		<Why />
	</Content>
	<Box cls={ssAlt}>
		<Content>
			<HeadingUnderline id="what">
				What The Fuck <HeadingExtra content="(Projects)" />
			</HeadingUnderline>
			<Projects />
		</Content>
	</Box>
	<Content>
		<HeadingUnderline id="who">
			Who the fuck <HeadingExtra content="(Team)" />
		</HeadingUnderline>
		<Team />
	</Content>
</Box>
