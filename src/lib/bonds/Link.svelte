<script lang="ts">
	import { stitch } from '@/ui'
	import Anchor from '../atoms/Anchor.svelte'

	export let url
	export let newTab = false

	export let css = null
	export let look = 'blocky'

	const ss = stitch({
		variants: {
			look: {
				clean: {
					textDecoration: 'none',
				},
				blocky: {
					// text: '$lg',
					// fontWeight: '$bold',
					color: '$foreground',
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
						// color: '$background',
						cursor: 'pointer',
						backgroundColor: '$highlight',

						'& span': {},
					},
				},
				blockinho: {
					// color: '$highlight',
					// textDecoration: 'underline',
					// color: '$foreground',
					color: '$highlight',
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
						// color: '$foreground',
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

<Anchor cls={ss} vrt={{ look }} {css} {url} {newTab}>
	<span>
		<slot />
	</span>
</Anchor>
