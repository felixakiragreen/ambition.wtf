<script lang="ts">
	import { stitch } from '@/ui'

	import { Box } from '@/lib/atoms'
	import SvgSquare from './SvgSquare.svelte'
	import SvgHexagon from './SvgHexagon.svelte'

	export let brandHue
	export let brandExact
	export let path
	export let transform

	export let shape = 'hexagon'
	export let rounded = null

	// variants
	export let symbol = 'fg'
	export let ground = 'bg'
	export let hoverSymbol = null
	export let hoverGround = null

	const ss = stitch({
		transition: '$1',

		color: 'var(--ground)',

		'--symbol': 'var(--stillSymbol)',
		'--ground': 'var(--stillGround)',
		'&:hover': {
			'--symbol': 'var(--hoverSymbol, var(--stillSymbol))',
			'--ground': 'var(--hoverGround, var(--stillGround))',
		},

		variants: {
			symbol: {
				cl: {
					'--stillSymbol': '$colors$clear',
				},
				cc: {
					'--stillSymbol': 'var(--currentColor)',
				},
				fg: {
					'--stillSymbol': '$colors$foreground',
				},
				bg: {
					'--stillSymbol': '$colors$background',
				},
				hl: {
					'--stillSymbol': '$colors$highlight',
				},
				ll: {
					'--stillSymbol': '$colors$lowlight',
				},
				be: {
					'--stillSymbol': 'var(--brandExact)',
				},
				bh: {
					'--stillSymbol': 'var(--brandHue400)',
				},
				// TODO: eventually I could bh100-900
			},
			ground: {
				//
				cl: {
					'--stillGround': '$colors$clear',
				},
				cc: {
					'--stillGround': 'var(--currentColor)',
				},
				fg: {
					'--stillGround': '$colors$foreground',
				},
				bg: {
					'--stillGround': '$colors$background',
				},
				hl: {
					'--stillGround': '$colors$highlight',
				},
				ll: {
					'--stillGround': '$colors$lowlight',
				},
				be: {
					'--stillGround': 'var(--brandExact)',
				},
				bh: {
					'--stillGround': 'var(--brandHue400)',
				},
			},
			hoverSymbol: {
				//
				cl: {
					'--hoverSymbol': '$colors$clear',
				},
				cc: {
					'--hoverSymbol': 'var(--currentColor)',
				},
				fg: {
					'--hoverSymbol': '$colors$foreground',
				},
				bg: {
					'--hoverSymbol': '$colors$background',
				},
				hl: {
					'--hoverSymbol': '$colors$highlight',
				},
				ll: {
					'--hoverSymbol': '$colors$lowlight',
				},
				be: {
					'--hoverSymbol': 'var(--brandExact)',
				},
				bh: {
					'--hoverSymbol': 'var(--brandHue400)',
				},
			},
			hoverGround: {
				//
				cl: {
					'--hoverGround': '$colors$clear',
				},
				cc: {
					'--hoverGround': 'var(--currentColor)',
				},
				fg: {
					'--hoverGround': '$colors$foreground',
				},
				bg: {
					'--hoverGround': '$colors$background',
				},
				hl: {
					'--hoverGround': '$colors$highlight',
				},
				ll: {
					'--hoverGround': '$colors$lowlight',
				},
				be: {
					'--hoverGround': 'var(--brandExact)',
				},
				bh: {
					'--hoverGround': 'var(--brandHue400)',
				},
			},
		},
	})
</script>

<Box
	cls={ss}
	vrt={{ symbol, ground, hoverSymbol, hoverGround }}
	style="
		--brandExact: {brandExact};
		--brandHue: {brandHue};
		--brandHue400: var(--colors-{brandHue}400);
	"
>
	{#if shape === 'square'}
		<SvgSquare fill="currentcolor">
			<g
				transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
			>
				<path d={path} id="foreground" fill="var(--symbol)" />
			</g>
		</SvgSquare>
	{:else if shape === 'hexagon'}
		<SvgHexagon fill="currentcolor" {rounded}>
			<g
				transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
			>
				<path d={path} id="foreground" fill="var(--symbol)" />
			</g>
		</SvgHexagon>
	{/if}
</Box>
