<script>
	import '@fontsource/uncut-sans/300.css';
	import '@fontsource/uncut-sans/400.css';
	import '@fontsource/uncut-sans/500.css';
	import '@fontsource/uncut-sans/600.css';
	import '@fontsource/uncut-sans/700.css';
	import '@fontsource/uncut-sans/300-italic.css';
	import '@fontsource/uncut-sans/400-italic.css';
	import '@fontsource/uncut-sans/500-italic.css';
	import '@fontsource/uncut-sans/600-italic.css';
	import '@fontsource/uncut-sans/700-italic.css';
	import '$lib/css/base.css';
	import '$lib/css/main.postcss';
	import 'blaze-slider/dist/blaze.css';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>EcoReport - Home</title>
	<meta name="description" content="App for reporting pollution!" />
	{@html '<script>' + partytownSnippet() + '</script>'}
	<script
		type="text/partytown"
		async
		src="https://analytics.eu.umami.is/script.js"
		data-website-id="5f03c60b-938d-41f9-ad8b-879df217bcbc"
	></script>
</svelte:head>

<Navbar />
<main class="pb-16 lg:pb-20 xl:pb-28">
	<slot />
</main>
<Footer />
