<script lang="ts">
	import { stitch } from '@/ui'

	import { Box } from '@/lib/atoms'
	import { Content } from '@/lib/bonds'

	import {
		HeadingExtra,
		HeadingUnderline,
		About,
		Projects,
		Team,
	} from '@/lib/cells'

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
		<HeadingUnderline id="why">
			Why The Fuck <HeadingExtra content="(About)" />
		</HeadingUnderline>
		<About />
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
