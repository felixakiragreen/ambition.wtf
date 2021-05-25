<script lang="ts">
	import { stitch } from '@/ui'
	import Anchor from '../atoms/Anchor.svelte'
	import Hexagon from './Hexagon.svelte'

	export let url
	export let hex
	// export let color
	export let path
	export let transform

	export let background
	export let foreground

	const ss = stitch({
		'--hex-bg': 'var(--base-hex-bg)',
		'--fill': 'var(--base-fill)',
		'--hover': 'false',
		'&:hover': {
			'--hex-bg': 'var(--hover-hex-bg)',
			'--fill': 'var(--hover-fill)',
			'--hover': 'true',
		},
		color: 'var(--hex-bg)',
		transition: '$1',
	})
</script>

<Anchor
	{url}
	newTab
	cls={ss}
	style="
		--base-hex-bg: {background || hex};
		--base-fill: {foreground || 'var(--colors-grey900)'};
		--hover-hex-bg: var(--colors-felixgreen);
		--hover-fill: var(--colors-indigo);
	">
	<Hexagon fill="currentcolor">
		<g
			transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}>
			<path d={path} id="foreground" fill="var(--fill)" />
		</g>
	</Hexagon>
</Anchor>
