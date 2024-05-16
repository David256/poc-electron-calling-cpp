<script>
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

	<button>Test</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
