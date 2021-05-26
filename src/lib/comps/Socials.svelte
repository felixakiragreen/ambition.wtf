<script lang="ts">
	import { socials } from '@/lib/datum/socials'
	import HexIconRow from './HexIconRow.svelte'

	export let space = 'sm'
	export let align = null
	export let size = 'md'
	export let css = null
</script>

<HexIconRow {socials} {css} {space} {align} {size} look={'brand'} />
