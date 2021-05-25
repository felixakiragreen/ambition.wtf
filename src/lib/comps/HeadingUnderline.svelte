<script lang="ts">
	import Text from '../bonds/Text.svelte'
	import Link from '../bonds/Link.svelte'

	export let id
</script>

<Link url={`#${id}`} look="clean">
	<Text
		as="h3"
		mdx="h5"
		look="mono"
		{id}
		css={{
			color: '$foreground',
			borderBottom: '2px solid $felixgreen',
			pointerEvents: 'none', // necessary to not cover any shit up
			'@initial': {
				pb: '$2',
			},
			'@md': {
				pb: '$4',
			},

			'&:before': {
				content: ' ',
				display: 'block',
				height: '$40' /* fixed header height*/,
				marginTop: '$-40' /* negative fixed header height */,
				visibility: 'hidden',
				zIndex: '-9999',
			},
		}}>
		<slot />
	</Text>
</Link>
