<script lang="ts">
  import logo from '../assets/ambition_round_flat_border.svg'
	import Section from '$lib/Section.svelte'
</script>

<header>
	<Section>
		<div class="flex items-center gap-4">
			<img src={logo} alt="Ambition hexagonal logo" />
			<h1>ambition<span class="text-grey-500">.wtf</span></h1>
		</div>

		<nav>
			<a href="#why-the-fuck-about">Why</a>
			<a href="#what-the-fuck-projects">What</a>
			<a href="#who-the-fuck-team">Who</a>
			<a href="#where-the-fuck-socials">Where</a>
		</nav>
	</Section>
</header>

<style style lang="postcss">
	header {
		@apply sticky;
		@apply -top-0.5;
		@apply bg-vulcan;
		@apply bg-opacity-50;
		@apply backdrop-filter backdrop-blur-md;
	}

  img {
    @apply h-12;
    @apply sm:h-16;
  }

	h1 {
		@apply text-3xl;
		@apply sm:text-4xl;
		@apply font-black;
	}

	/* 

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	} */
</style>
