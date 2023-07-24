<script>
	import '$lib/css/main.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { register } from 'swiper/element/bundle';

	register();
</script>

<svelte:head>
	<title>EcoReport</title>
	<meta name="description" content="App for reporting pollution!" />
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
