<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '../atoms/Box.svelte'
	import Image from '../atoms/Image.svelte'
	import Text from '../bonds/Text.svelte'

	import avatar_fag from '../../assets/avatar_fag_round_gradient.svg'
	import avatar_tlm from '../../assets/avatar_tlm_round_gradient.svg'
	import avatar_mlm from '../../assets/avatar_mlm_round_gradient.svg'

	import { personals } from '../datum/socials'

	import IconSocialRow from '../bonds/IconSocialRow.svelte'

	const ss = stitch({
		display: 'grid',
		justifyItems: 'center',
		py: '$8',
		gridTemplateRows: 'repeat(auto-fit, 1fr)',
		gridTemplateColumns: 'auto',
		gap: '$16',
		'@sm': {
			gridTemplateRows: 'auto',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '$0',
		},
	})

	const ssBox = stitch({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		sy: '$3',

		'> img': {
			mb: '$4',
			size: '$48',
			'@sm': {
				size: '$36',
			},
			'@lg': {
				size: '$48',
			},
		},
	})
</script>

<Box cls={ss}>
	<Box cls={ssBox}>
		<Image url={avatar_fag} alt="avatar for felix green" />
		<Text mdx="h3" css={{ fontFamily: '$main' }}>
			felix <Text css={{ color: '$felixgreen' }}>green</Text>
		</Text>
		<Text>the builder</Text>
		<IconSocialRow
			socials={personals.fag}
			size="md"
			space="no"
			symbol="hl"
			ground="cl"
			hoverSymbol="ll"
			hoverGround="hl"
		/>
	</Box>

	<Box cls={ssBox}>
		<Image url={avatar_mlm} alt="avatar for mcnames" />
		<Text mdx="h3" css={{ fontFamily: '$main' }}>mcnames</Text>
		<Text>the cat herder</Text>
		<IconSocialRow
			socials={personals.mlm}
			size="md"
			space="no"
			symbol="hl"
			ground="cl"
			hoverSymbol="ll"
			hoverGround="hl"
		/>
	</Box>

	<Box cls={ssBox}>
		<Image url={avatar_tlm} alt="avatar for macbeth" />
		<Text mdx="h3" css={{ fontFamily: '$main' }}>macbeth</Text>
		<Text>the art forger</Text>
		<IconSocialRow
			socials={personals.tlm}
			size="md"
			space="no"
			symbol="hl"
			ground="cl"
			hoverSymbol="ll"
			hoverGround="hl"
		/>
	</Box>
</Box>
