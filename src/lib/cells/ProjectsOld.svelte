<script>
	import Box from '../atoms/Box.svelte'
	import Image from '../atoms/Image.svelte'
	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'
	import Stack from '../bonds/Stack.svelte'

	import fuckyous from '../../assets/hero_fuckyous.png'
	import edworm from '../../assets/hero_edworm.gif'
	import artsee from '../../assets/hero_artsee.jpg'
	import junks from '../../assets/hero_cryptojunks.png'
	import hexis from '../../assets/hero_hexis.jpg'
</script>

<Stack
	gap="xl"
	css={{
		pb: '$24',
		lineHeight: '$lg',
	}}
>
	<Box css={{ height: '$8' }} />

	<Link url={'https://lilfks.wtf'} newTab look="clean">
		<Image url={fuckyous} css={{ width: '100%' }} />
	</Link>
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '$orange300' }}>lil fks</Text> ⬡ mutable on-chain NFTs</Text
	>
	<Text
		>A 100% on-chain NFT collection that uses on-chain mutation mechanics.
		Design and re-design the lil fks on-chain at any time. Score limited edition
		traits during special mutation events.<br /><br />
		Get and mutate one of 10,000 lil fks at <Link
			url={'https://lilfks.wtf'}
			newTab
			look="blockinho">lilfks.wtf</Link
		>.</Text
	>

	<Box css={{ height: '$16' }} />

	<Link url={'https://theworm.wtf'} newTab look="clean">
		<Image url={edworm} css={{ width: '100%' }} />
	</Link>
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '#ec008c' }}>The Worm</Text> ⬡ social soul-bound on-chain
		NFTs</Text
	>
	<Text
		>A 100% on-chain social NFT that uses share-to-mint. Get The Worm, pass it
		along, and it will mint you a permanent memento (soul-bound) of your special
		time together.<br /><br />
		Track The Worm and learn more at <Link
			url={'https://theworm.wtf'}
			newTab
			look="blockinho">theworm.wtf</Link
		>.</Text
	>

	<Box css={{ height: '$16' }} />

	<Link url={'https://artsee.wtf'} newTab look="clean">
		<Image url={artsee} css={{ width: '100%' }} />
	</Link>
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '$yellow300' }}>artsee</Text> ⬡ browser extension for NFTs</Text
	>
	<Text
		>A browser extension for admiring your NFTs every time you open a new tab.
		Make your Web 2 experience a little more Web 3. Available for Brave & Chrome
		at
		<Link url={'https://artsee.wtf'} newTab look="blockinho">artsee.wtf</Link
		>.</Text
	>

	<Box css={{ height: '$16' }} />

	<Link url={'https://cryptojunks.wtf'} newTab look="clean">
		<Image url={junks} css={{ width: '100%' }} />
	</Link>
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '$purple300' }}>CryptoJunks</Text> ⬡ off-chain IPFS NFTs</Text
	>
	<Text
		>An NSFW NFT collection of pixel art Junks made from more than 1,200
		attributes. The CryptoPunks set the standard for NFT pixel art … the
		CryptoJunks aim a little lower.<br /><br />
		Grab some Junk at <Link
			url={'https://cryptojunks.wtf'}
			newTab
			look="blockinho">cryptojunks.wtf</Link
		>.</Text
	>

	<Box css={{ height: '$16' }} />

	<Link url={'https://hexis.wtf'} newTab look="clean">
		<Image url={hexis} css={{ width: '100%' }} />
	</Link>
	<Text size="xl" css={{ fontWeight: '$bold' }}
		><Text css={{ color: '$grey400' }}>hexis</Text> ⬡ off-chain IPFS NFTs</Text
	>
	<Text
		>An animated NFT collection and experiment in shape and dimension. Hexis
		combines the generative madness of an algorithm with the soft guidance of an
		artist’s hand.<br /><br />
		View them all at <Link url={'https://hexis.wtf'} newTab look="blockinho"
			>hexis.wtf</Link
		>.</Text
	>
</Stack>
