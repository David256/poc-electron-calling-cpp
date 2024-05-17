<script lang="ts">
	import { onMount, set } from 'svelte'

	let result = {}

	onMount(() => {
		window.functions.onResult((event, data) => {
			console.log(event)
			console.log(data)

			result = data
		})
		const testButton = document.getElementById('test-btn')
		testButton?.addEventListener('click', () => {
			console.log('Will emit an event...')

			window.functions.click()
		})
	})
</script>

<svelte:head>
	<title>PoC: Electron calling C++ functions</title>
	<meta name="description" content="PoC of Electron calling C++ functions" />
</svelte:head>

<section>
	<h1>PoC</h1>

	<h2>Electron calling C++ functions</h2>

	<p>
		This is a proof of concept. In this test, we try to pass two arrays of integers, and an integer
		value to a C++ function. The result will be shown in the window. In the console/terminal some
		log message should be printed.
	</p>

	<button id="test-btn">Test</button>

	<div class="box">
		{JSON.stringify(result)}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.box {
		position: relative;
		border: 1px solid black;
		padding: 1rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		width: 100vh;
		min-height: 5rem;
	}
</style>
