<script lang="ts">
	import { Svg } from '@/lib/atoms'

	export let viewBox = '-1.5 -1.5 42 39'
	export let fill = '#ebebeb'

	export let rounded = false
</script>

<Svg {viewBox}>
	<path fill="none" d="M0 0H36V36H0z" />

	<path
		d={rounded
			? 'M17.1.52a1.798 1.798 0 011.8 0l13.788 7.96c.557.322.9.916.9 1.559v15.922a1.8 1.8 0 01-.9 1.559L18.9 35.48a1.798 1.798 0 01-1.8 0L3.312 27.52a1.8 1.8 0 01-.9-1.559V10.039a1.8 1.8 0 01.9-1.559L17.1.52z'
			: 'M18 0l15.588 9v18L18 36 2.412 27V9L18 0z'}
		{fill}
	/>

	<slot />
</Svg>
