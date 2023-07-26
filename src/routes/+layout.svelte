<script>
	import '$lib/css/base.css';
	import '$lib/css/main.postcss';
	import 'blaze-slider/dist/blaze.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>EcoReport</title>
	<meta name="description" content="App for reporting pollution!" />
</svelte:head>

<Navbar />

<main class="pb-28">
	<slot />
</main>
