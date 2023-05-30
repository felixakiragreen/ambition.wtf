<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import Link from '../bonds/Link.svelte'
	import Text from '../bonds/Text.svelte'

	export let url: string
	export let newTab = false

	export let css: CSS = {}
</script>

<Text look="mono">
	<Link
		look="blocky"
		css={{
			...css,
			textTransform: 'uppercase',
			'&:hover': {
				px: '$2',
				mx: '$-2',
				color: '$indigo',
				background: '$felixgreen',
			},
			'&:after': {
				content: '',
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
