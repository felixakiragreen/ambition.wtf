<script lang="ts">
	import { stitch } from '@/ui'

	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'

	export let url
	export let newTab = false

	export let css = null
</script>

<Text look="mono">
	<Link
		css={{
			...css,
			'&:hover': {
				px: '$2',
				mx: '$-2',
				color: '$indigo',
				background: '$felixgreen',
			},
			'&:after': {
				'@initial': {
					content: '',
				},
				'@md': {
					content: ' tf',
				},
				'@lg': {
					content: ' the fuck',
				},
			},
		}}
		{url}
		{newTab}
	>
		<slot />
	</Link>
</Text>
