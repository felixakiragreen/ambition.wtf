<script lang="ts">
	import Text from '../bonds/Text.svelte'
</script>

<Text
	as="h3"
	mdx="h5"
	look="mono"
	css={{
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
