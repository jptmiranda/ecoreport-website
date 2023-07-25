<script>
	import '$lib/css/main.css';
	import 'blaze-slider/dist/blaze.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>EcoReport</title>
	<meta name="description" content="App for reporting pollution!" />
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
