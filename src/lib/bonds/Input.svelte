<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	import { Input, Textarea } from '@/lib/atoms'

	export let css: CSS = null
	export let look = 'holo'
	export let size = 'md'
	export let rounding = 'no'
	export let stateful = null

	export let value = ''
	export let placeholder = ''

	export let multiline = false
	export let lines: number = null
	type InputTypes = `password` | `email` | `text` | `number` | `date` | `time`

	export let inputType: InputTypes = 'text'

	const ss = stitch({
		// cursor: 'pointer',
		transition: '$1',

		// maybe
		width: '$full',

		// Back (background)
		// Edge (border)
		// Text (foreground)
		// Ring (focus)

		// BackHover
		// EdgeHover
		// TextHover
		// RingHover

		// BackFocus
		// EdgeFocus
		// TextFocus
		// RingFocus

		$$Back: '$colors$clear',
		$$Edge: '$colors$muted',
		$$Text: '$colors$foreground',
		$$Ring: '$colors$primaryFocus',

		$$BackHover: '$colors$faded',
		$$EdgeHover: '$colors$highlight',
		$$TextHover: '$colors$foreground',
		$$RingHover: '$colors$primaryFocus',

		// $$BackFocus
		$$EdgeFocus: '$colors$lowlight',
		// $$TextFocus
		// $$RingFocus

		'&:active': {},
		'&:focus': {
			outline: 'none',
			boxShadow: [
				//
				'0 0 0px 3px $colors$background',
				'0 0 0px 6px $$Ring',
			].join(', '),
		},

		variants: {
			look: {
				holo: {
					bg: '$$Back',
					color: '$$Text',
					border: '1px solid $$Edge',
					fontFamily: '$mono',
					'&:hover': {
						border: '1px solid $$EdgeHover',
						bg: '$$BackHover',
					},
					'&:focus': {
						border: '1px solid $$EdgeFocus',
						outline: 'none',
					},
				},
			},
			size: {
				sm: {
					px: '$3',
					py: '$1_5',
					text: '$md',
				},
				md: {
					px: '$4',
					py: '$2',
					text: '$lg',
				},
				lg: {
					px: '$6',
					py: '$3',
					text: '$xl',
				},
			},
			rounding: {
				no: {
					borderRadius: '$none',
				},
				md: {
					borderRadius: '$base',
				},
				full: {
					borderRadius: '$full',
				},
			},
			//
			stateful: {
				valid: {
					$$Back: '$colors$green900',
					$$Edge: '$colors$green600',
					$$BackHover: '$colors$green800',
					$$EdgeHover: '$colors$green300',
					$$BackFocus: '$colors$green800',
					$$EdgeFocus: '$colors$green400',
				},
				invalid: {
					$$Back: '$colors$red900',
					$$Edge: '$colors$red600',
					$$BackHover: '$colors$red800',
					$$EdgeHover: '$colors$red300',
					$$BackFocus: '$colors$red800',
					$$EdgeFocus: '$colors$red400',
				},
			},
		},
	})
</script>

{#if multiline}
	<Textarea
		cls={ss}
		vrt={{ look, size, rounding, stateful }}
		{css}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
		{lines}
	/>
{:else}
	<Input
		cls={ss}
		vrt={{ look, size, rounding, stateful }}
		{css}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
		{inputType}
	/>
{/if}
