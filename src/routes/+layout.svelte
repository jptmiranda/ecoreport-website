<script>
	import '$lib/css/base.css';
	import '$lib/css/main.postcss';
	import 'blaze-slider/dist/blaze.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>EcoReport</title>
	<meta name="description" content="App for reporting pollution!" />
</svelte:head>

<Navbar />

<main class="pb-16 lg:pb-20 xl:pb-28">
	<slot />
</main>

<Footer />
