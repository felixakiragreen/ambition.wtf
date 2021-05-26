<script>
	import Image from '../atoms/Image.svelte'
	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'
	import Stack from '../bonds/Stack.svelte'

	import hexis from '../../assets/hero_hexis.jpg'
	import junks from '../../assets/hero_junks.jpg'
	import artsee from '../../assets/hero_artsee.jpg'
</script>

<Stack space="xl" css={{ pb: '$12' }}>
	<Link url={'http://hexis.wtf'} newTab look="clean">
		<Image url={hexis} css={{ width: '100%' }} />
	</Link>
	<Text>hexis — an NFT collection</Text>

	<Link url={'http://cryptojunks.wtf'} newTab look="clean">
		<Image url={junks} css={{ width: '100%' }} />
	</Link>
	<Text>CryptoJunks — an NFT collection</Text>

	<Link url={'http://artsee.wtf'} newTab look="clean">
		<Image url={artsee} css={{ width: '100%' }} />
	</Link>
	<Text>artsee — a browser extension for viewing your NFTs</Text>
</Stack>
