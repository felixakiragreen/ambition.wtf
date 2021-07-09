<script>
	import Image from '../atoms/Image.svelte'
	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'
	import Stack from '../bonds/Stack.svelte'

	import hexis from '../../assets/hero_hexis.jpg'
	import junks from '../../assets/hero_junks.jpg'
	import artsee from '../../assets/hero_artsee.jpg'
	import edworm from '../../assets/hero_edworm.gif'
</script>

<Stack space="xl" css={{ pb: '$12' }}>
	<Link url={'https://theworm.wtf'} newTab look="clean">
		<Image url={edworm} css={{ width: '100%' }} />
	</Link>
	<Text>The Worm — an NFT worm making his way through the blockchain</Text>

	<Link url={'https://artsee.wtf'} newTab look="clean">
		<Image url={artsee} css={{ width: '100%' }} />
	</Link>
	<Text>artsee — a browser extension for viewing your NFTs</Text>

	<Link url={'https://cryptojunks.wtf'} newTab look="clean">
		<Image url={junks} css={{ width: '100%' }} />
	</Link>
	<Text>CryptoJunks — an NFT collection</Text>

	<Link url={'https://hexis.wtf'} newTab look="clean">
		<Image url={hexis} css={{ width: '100%' }} />
	</Link>
	<Text>hexis — an NFT collection</Text>
</Stack>
