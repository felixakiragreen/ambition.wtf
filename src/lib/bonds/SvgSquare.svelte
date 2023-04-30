<script lang="ts">
	import { Svg } from '@/lib/atoms'

	export let viewBox = '4 4 28 28'
	export let fill = 'none'

	// export let rounded = false
</script>

<Svg {viewBox}>
	<path {fill} d="M0 0H36V36H0z" />

	<slot />
</Svg>
