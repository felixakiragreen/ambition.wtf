<script lang="ts">
	import { stitch } from '@/ui'

	import Box from '../atoms/Box.svelte'
	import Image from '../atoms/Image.svelte'
	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'
	import Stack from '../bonds/Stack.svelte'
	import Inline from '../bonds/Inline.svelte'

	// import {
	//   Box,
	//   Img,
	//   Text,
	//   ExtraHeading,
	//   SocialTwitter,
	//   SocialHexIcon,
	// } from '../components'
	// import { socialsPersonal } from '../content/SocialLinks'

	import avatar_fag from '../../assets/avatar_fag_round_gradient.svg'
	import avatar_tlm from '../../assets/avatar_tlm_round_gradient.svg'
	import avatar_mlm from '../../assets/avatar_mlm_round_gradient.svg'

	const ss = stitch({
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		justifyItems: 'center',
		py: '$8',
	})

	const ssBox = stitch({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		'> img': {
			mb: '$4',
			'@initial': {
				size: '$24',
			},
			'@sm': {
				size: '$32',
			},
			'@lg': {
				size: '$48',
			},
		},
	})
</script>

<Box cls={ss}>
	<Box cls={ssBox}>
		<Image url={avatar_fag} alt="avatar for F.A.G." />

		<Text mdx="h3" css={{ fontFamily: '$main' }}>
			felix <Text css={{ color: '$felixgreen' }}>green</Text>
		</Text>
		<Text css={{ display: 'block', pt: '$3', text: '$xs' }}>the hacker</Text>
		<!-- <Box align="centerX">
  {socialsPersonal.fag.map(social => (
    <SocialHexIcon key={social.url} {...social} />
  ))}
</Box> -->
	</Box>

	<Box cls={ssBox}>
		<Image url={avatar_tlm} alt="avatar for macbeth" />

		<Text mdx="h3" css={{ fontFamily: '$main' }}>macbeth</Text>
		<Text css={{ display: 'block', pt: '$3', text: '$xs' }}
			>the art forger</Text>
		<!-- <Box align="centerX">
  {socialsPersonal.tlm.map((social) => (
    <SocialHexIcon key={social.url} {...social} />
  ))}
</Box> -->
	</Box>

	<Box cls={ssBox}>
		<Image url={avatar_mlm} alt="avatar for mlem" />

		<Text mdx="h3" css={{ fontFamily: '$main' }}>mcnames</Text>
		<Text css={{ display: 'block', pt: '$3', text: '$xs' }}
			>the cat burglar</Text>
		<!-- <Box align="centerX">
  {socialsPersonal.mlm.map((social) => (
    <SocialHexIcon key={social.url} {...social} />
  ))}
</Box> -->
	</Box>
</Box>
