<script lang="ts">
	import { stitch } from '@/ui'
	import Anchor from '../atoms/Anchor.svelte'
	import Hexagon from './Hexagon.svelte'

	export let url
	export let hex
	export let color
	export let path
	export let transform

	export let look

	const ss = stitch({
		variants: {
			look: {
				icon: {
					'--hex-bg': 'var(--colors-clear)',
					'--fill': 'var(--colors-felixgreen)',
					'&:hover': {
						'--hex-bg': 'var(--colors-felixgreen)',
						'--fill': 'var(--colors-indigo)',
					},
				},
				brand: {
					'--hex-bg': 'var(--var-hex)',
					'--fill': 'var(--colors-background)',
					'&:hover': {
						'--hex-bg': 'var(--colors-felixgreen)',
						'--fill': 'var(--colors-indigo)',
					},
				},
				color: {
					'--hex-bg': 'var(--var-clr)',
					'--fill': 'var(--colors-foreground)',
					'&:hover': {
						'--hex-bg': 'var(--colors-felixgreen)',
						'--fill': 'var(--colors-indigo)',
					},
				},
				felix: {
					'--hex-bg': 'var(--colors-indigo)',
					'--fill': 'var(--colors-felixgreen)',
					'&:hover': {
						'--hex-bg': 'var(--colors-felixgreen)',
						'--fill': 'var(--colors-indigo)',
					},
				},
			},
			fill: {
				felix: {
					'--hex-bg': 'var(--colors-felixgreen)',
					'--fill': 'var(--colors-indigo)',
				},
				indigo: {
					'--hex-bg': 'var(--colors-indigo)',
					'--fill': 'var(--colors-felixgreen)',
				},
			},
		},
		color: 'var(--hex-bg)',
		transition: '$1',
	})
</script>

<Anchor
	{url}
	newTab
	cls={ss}
	vrt={{ look }}
	style="
		--var-hex: {hex};
		--var-clr: var(--colors-{color}400);
	">
	<Hexagon fill="currentcolor" rounded>
		<g
			transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}>
			<path d={path} id="foreground" fill="var(--fill)" />
		</g>
	</Hexagon>
</Anchor>
