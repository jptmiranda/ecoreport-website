<script lang="ts">
	import Counter from '$lib/components/reports/Counter.svelte';

	const totalReports = 2147483647;
	const unsolvedReports = 30800000;
	const solvedReports = 25712;
</script>

<section class="container mx-auto px-4 lg:px-8 mt-8 lg:mt-12">
	<h1
		class="text-eco-gradient font-bold text-3xl sm:text-4xl xl:text-6xl leading-normal text-center"
	>
		Analytics
	</h1>

	<div class="flex flex-col sm:flex-row gap-4 sm:gap-12 lg:gap-x-24 justify-center mt-6 xl:mt-16">
		<Counter value={totalReports} description="Total de Reports" />
		<Counter value={unsolvedReports} description="Reports por Resolver" type="negative" />
		<Counter value={solvedReports} description="Reports Resolvidos" type="positive" />
	</div>
</section>
