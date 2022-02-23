<script>
	import Image from '../atoms/Image.svelte'
	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'
	import Stack from '../bonds/Stack.svelte'
</script>

<Stack
	space="xl"
	css={{
		pb: '$12',
		lineHeight: '$lg',
	}}>
	<Text>
		<Text size="xl">
			We are a creative studio practicing <Text css={{ color: '$highlight' }}
				>Technomancy</Text
			>, the art of creating magical technological experiences.
		</Text>
		<br /><br /> Driven by experimentation, innovation, and breaking things,
		we’re the pioneers of share-to-mint, on-chain mutation, soul-bound
		(perma-nifties) and yoink-chain Smart Contract mechanics.
		<br /><br />Our work is open-source and copyright free.
		<br /><br />Explore our projects below and join the conversation on
		<Link url={'https://discord.gg/6j65H7nqSd'} newTab look="blockinho"
			>Discord</Link
		>.
	</Text>
</Stack>
