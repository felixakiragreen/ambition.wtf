<script lang="ts">
	import { stitch } from '@/ui'

	import { Box, Image } from '@/lib/atoms'
	import { Content, Text } from '@/lib/bonds'

	import { HeadingExtra, HeadingUnderline } from '@/lib/cells'

	import Privacy from '../privacy.svelte'

	const ss = stitch({
		bg: '$background',
		color: '$foreground',
		fontFamily: '$mono',
	})
</script>

<Box cls={ss}>
	<Content>
		<HeadingUnderline id="privacy">
			Privacy <HeadingExtra content="(Policy)" />
		</HeadingUnderline>

		<Privacy />
	</Content>
</Box>
