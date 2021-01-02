<script>
	import { onMount } from 'svelte'
	import Socials from './Social/index.svelte'

	let mounted = false

  onMount(async () => {
    // This is to prevent flashing
    mounted = true
  })
</script>

<main>
	
	<img id="ambition" src="ambition_640.png" />

	<p>ambition.wtf presents</p>

	<div class="hexis">

	<a href="https://hexis.wtf" target="_blank"><h1>hexis.wtf</h1></a>
	<p>a generative hexagonal cryptoart collection</p>
	<p>
		<span class="nb">created by <a href="https://twitter.com/felixakiragreen" target="_blank">Felix Green</a></span>
		<span class="nb">and <a href="https://twitter.com/trentonmcbeth" target="_blank">Trenton McBeth</a></span>
	</p>
	<img id="hexis" src="hexis_640.png" />

	<p>
		<span style="color: var(--grey-400);">follow us</span>
		<span style="color: var(--grey-100);">@hexis_wtf</span>
	</p>
	
	<div>
	
	</div>

	{#if mounted}
		<footer>
			<Socials />
		</footer>
	{/if}

	</div>

	
</main>


<style>
	main {
		text-align: center;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center; 
		justify-content: center;
		min-height: 100%;
		width: 100%;
	}

	.hexis {
		background-color: var(--grey-700);
		width: 100%;
	}

	footer {
		height: 120px;
		width: 100%;
	}

	.nb {
		white-space: nowrap;
	}

	img#ambition {
		max-width: 160px;
	}

	img#hexis {
		max-width: 320px;
	}

	a {
		color: var(--green-400);
		text-decoration: none;
	}

	a:hover {
		color: var(--green-300);
		text-decoration: none;
	}

</style>