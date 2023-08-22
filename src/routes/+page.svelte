<script>
	import AppCarousel from '$lib/components/homepage/AppCarousel.svelte';
	import DownloadApp from '$lib/components/homepage/DownloadApp.svelte';
	import Faqs from '$lib/components/homepage/Faqs.svelte';
	import Goal from '$lib/components/homepage/Goal.svelte';
	import Hero from '$lib/components/homepage/Hero.svelte';
	import Metrics from '$lib/components/homepage/Metrics.svelte';
	import Partnerships from '$lib/components/homepage/Partnerships.svelte';
	import PolutionTypes from '$lib/components/homepage/PolutionTypes.svelte';
	// import ProviderCarousel from '$lib/components/homepage/ProviderCarousel.svelte';
</script>

<Hero />
<!-- <ProviderCarousel /> -->
<AppCarousel />
<PolutionTypes />
<Goal />
<Metrics />
<Partnerships />
<Faqs />
<DownloadApp />
