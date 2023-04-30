<script lang="ts">
	import { stitch } from '@/ui'
	import type { CSS } from '@/ui'

	export let id = null
	export let cls = null
	export let css: CSS = null
	export let style = null
	export let vrt = {}

	type InputTypes = `password` | `email` | `text` | `number` | `date` | `time`

	export let inputType: InputTypes = 'text'
	export let value = ''
	export let placeholder = ''

	const ss = cls || stitch({})
</script>

{#if inputType === 'password'}
	<input
		type="password"
		class={ss({ ...vrt, css })}
		{style}
		{id}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'email'}
	<input
		type="email"
		class={ss({ ...vrt, css })}
		{style}
		{id}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'number'}
	<input
		type="number"
		class={ss({ ...vrt, css })}
		{style}
		{id}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'date'}
	<input
		type="date"
		class={ss({ ...vrt, css })}
		{style}
		{id}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'time'}
	<input
		type="time"
		class={ss({ ...vrt, css })}
		{style}
		{id}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else}
	<input
		type="text"
		class={ss({ ...vrt, css })}
		{style}
		{id}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{/if}
