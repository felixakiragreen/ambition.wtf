<script lang="ts">
	import { Box } from '@/lib/atoms'

	import Text from './Text.svelte'
	import Inline from './Inline.svelte'
	import Link from './Link.svelte'
	import Button from './Button.svelte'

	// import { abbrev } from '@/lib/funcs/abbrev'

	export let hue = null
	export let type = 'info'
	export let memo = 'memo'
	// export let hash = null
	// export let url = null
	export let onClose = null

	const getColor = () => {
		switch (true) {
			case hue:
				return hue
			case type == 'requesting':
			case type == 'warning':
				return 'orange'
			case type == 'pending':
				return 'blue'
			case type == 'failed':
			case type == 'error':
				return 'red'
			case type == 'confirmed':
			case type == 'new mint':
				return 'green'
			case type == 'transfer':
				return 'purple'
			default:
				return 'grey'
		}
	}

	$: clr = type && getColor()
</script>

<Inline
	css={{
		mx: '$8',
		background: '$faded',
		'--cur': `$colors$${clr}400`,
		fontFamily: '$mono',
		p: '$4',
		boxShadow: '-4px 4px 0px 0 rgba(0, 0, 0), 4px 4px 0px 0 rgba(0, 0, 0)',
	}}
>
	<Box
		css={{
			width: '$2',
			bg: 'var(--cur)',
			m: '$-4',
			mr: '$4',
		}}
	/>
	<Inline alignV="center" css={{ flex: 1 }}>
		<Text
			css={{
				fontFamily: '$mono',
				fontSize: '$sm',
				color: 'var(--cur)',
				flex: 1,
			}}
		>
			<Text css={{ fontWeight: 'bold' }}>
				{type}
			</Text>
			<Text css={{ color: '$grey300', wordWrap: 'break-all' }}>
				{memo}
			</Text>
			<!-- {#if hash}
				<Link
					newTab
					{url}
					css={{
						color: '$purple300',
						borderColor: '$purple300',
						'&:hover': {
							bg: '$purple500',
							color: '$white',
						},
					}}
				>
					{abbrev(hash, false, 8)}
				</Link>
				<Text css={{ color: '$muted', fontSize: '$xs' }}>
					(etherscan link, can take ~30 secs)
				</Text>
			{/if} -->
		</Text>
		{#if onClose}
			<Button
				on:click={onClose}
				look="holo"
				css={{
					color: '$orange400',
					size: '$10',
					p: '$0',
					fontSize: '$6xl',
					fontFamily: '$main',
					lineHeight: '34px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'baseline',
					'&:hover': {
						color: '$foreground',
					},
				}}>×</Button
			>
		{/if}
	</Inline>
</Inline>
