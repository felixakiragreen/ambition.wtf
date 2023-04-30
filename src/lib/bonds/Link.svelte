<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Anchor } from '@/lib/atoms'

	export let css: CSS = {}
	export let look = 'blocky'

	export let url
	export let fileName = undefined
	export let newTab = false

	const ss = stitch({
		variants: {
			look: {
				clean: {
					textDecoration: 'none',
					color: 'inherit',
				},
				blocky: {
					// text: '$lg',
					// fontWeight: '$bold',
					color: '$highlight',
					textDecoration: 'none',
					borderBottom: '2px solid currentcolor',
					display: 'inline-block',
					py: '$2',
					transition: '$1',

					// '& span': {
					// 	display: 'inline-block',
					// 	// transition: '$1',
					// 	// py: '$1',
					// 	// my: '$-1',
					// },

					'&:hover': {
						px: '$2',
						mx: '$-2',
						// backgroundColor: '$felixgreen',
						// color: '$indigo',
						bg: '$primary',
						color: '$primaryText',
						cursor: 'pointer',

						'& span': {},
					},
				},
				blockinho: {
					color: '$highlight',
					// textDecoration: 'underline',
					// color: '$foreground',
					textDecoration: 'none',
					display: 'inline-block',
					borderBottom: '1px solid currentcolor',
					// transition: '$1',

					'& span': {
						display: 'inline-block',
						transition: '$1',

						// py: '$1',
						// my: '$-1',
					},

					'&:hover': {
						color: '$background',
						cursor: 'pointer',
						borderBottom: '1px solid transparent',

						'& span': {
							backgroundColor: '$highlight',
							px: '$1',
							mx: '$-1',
						},
					},
				},
			},
			// textTransform: {
			// 	initial: {
			// 		textTransform: "initial"
			// 	},
			// 	uppercase: {
			// 		textTransform: 'uppercase',
			// 	},
			// }
		},
	})
</script>

<Anchor cls={ss} vrt={{ look }} {css} {url} {fileName} {newTab} on:click>
	<span>
		<slot />
	</span>
</Anchor>
