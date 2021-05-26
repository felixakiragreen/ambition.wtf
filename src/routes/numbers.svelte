<script lang="ts">
	// get shit from etherscan
	import { onMount } from 'svelte'
	// import BN from 'bn.js'

	// import { ethers } from 'ethers'

	import Content from '$lib/bonds/Content.svelte'

	let ethers

	onMount(async () => {
		// const module = await import('ethers');
		// ethers = module.ethers;
		// const provider = new ethers.providers.EtherscanProvider()
		// const contractAddress = "0x585A2C37858D3B03824BC683829e4DBbF58969ee"
		// const ownerAddress = "0x0416B53d81eE3d868bBE3CE7D93980B45159b8A0"
		// let history = await provider.getHistory(ownerAddress);
		// console.log(history)
		// console.log({ ownerAddress })
	})
</script>

<Content>
	<article>
		<h2>Quests</h2>

		<dl class="md:grid-cols-2">
			<div class="box done">
				<dt class="bar todo">TODO: progress bar → 100/100</dt>
				<dd>
					Launch CryptoJunks <small>by Apr 1</small>
				</dd>
			</div>
			<div class="box done">
				<dt class="bar todo">TODO: progress bar → 214/214</dt>
				<dd>
					Sell out Tier 1 <small>by Apr 15</small>
				</dd>
			</div>
			<div class="box done">
				<dt class="bar todo">TODO: progress bar 62/50</dt>
				<dd>
					Reach 50 Twitter followers <small>by Apr 15</small>
				</dd>
			</div>
			<div class="box">
				<dt class="bar todo">TODO: progress bar → 0/420</dt>
				<dd>
					Sell out Tier 2 <small>by Apr 30</small>
				</dd>
			</div>
			<div class="box">
				<dt class="bar todo">TODO: progress bar 62/100</dt>
				<dd>
					Reach 100 Twitter followers <small>by Apr 30</small>
				</dd>
			</div>
			<div class="box">
				<dt class="bar todo">TODO: progress bar 59/100</dt>
				<dd>
					100% Lighthouse Score <small>by Apr 30</small>
				</dd>
			</div>
			<div class="box">
				<dt class="bar todo">TODO: progress bar 0/2</dt>
				<dd>
					i18n languages 🇷🇺🇵🇹 <small>by Apr 30</small>
				</dd>
			</div>
			<div class="box">
				<dt class="bar todo">TODO: progress bar 0/1</dt>
				<dd>
					New Buying Experience <small>by Apr 30</small>
				</dd>
			</div>
			<div class="box">
				<dt class="bar todo">TODO: progress bar 0/1</dt>
				<dd>
					On-Chain Art Contract <small>by May ??</small>
				</dd>
			</div>
		</dl>

		<h2>Stats</h2>
		<dl class="md:grid-cols-3">
			<div class="box stat">
				<dt>0</dt>
				<dd>
					Sales <small>24h</small>
				</dd>
			</div>

			<div class="box stat">
				<dt>6</dt>
				<dd>
					Sales <small>7d</small>
				</dd>
			</div>

			<div class="box stat">
				<dt>214</dt>
				<dd>
					Sales <small>All</small>
				</dd>
			</div>

			<div class="box stat">
				<dt>Ξ8.79</dt>
				<dd>
					Invested <small>All</small>
				</dd>
			</div>

			<div class="box stat">
				<dt>Ξ0.69</dt>
				<dd>
					Earned <small>All</small>
				</dd>
			</div>
		</dl>

		<div>
			<h4>Other stats that are coming:</h4>
			<ul>
				<li>Website traffic</li>
				<li>Hexis project</li>
				<li>Secondary sales</li>
			</ul>
		</div>
	</article>
</Content>
