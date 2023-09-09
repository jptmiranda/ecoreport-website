<script lang="ts">
	import Counter from '$lib/components/reports/Counter.svelte';
	import MonthlyGraph from '$lib/components/reports/MonthlyGraph.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { MonthlyReport } from '$lib/types';
	import Analytics from '$lib/components/Analytics.svelte';

	export let data: PageData;
	let monthlyGraph: MonthlyGraph;
	let count = { total: 0, unresolved: 0, resolved: 0 };

	onMount(() => {
		data.supabase
			.channel('schema-db-changes')
			.on(
				'postgres_changes',
				{
					event: 'INSERT',
					schema: 'public'
				},
				async (payload: { table: string }) => {
					if (payload.table === 'reports') {
						const { data: reportsCount } = await data.supabase.rpc('count_reports');
						const { data: monthlyCount } = (await data.supabase
							.from('monthly_reports_count')
							.select()) as {
							data: MonthlyReport[];
						};

						count = reportsCount;
						monthlyGraph.updateGraph(monthlyCount);
					}
				}
			)
			.subscribe();
	});
</script>

<svelte:head>
	<title>EcoReport - Reports</title>
</svelte:head>

<section class="container mx-auto px-4 lg:px-8 mt-8 lg:mt-12">
	<h1
		class="text-eco-gradient font-bold text-3xl sm:text-4xl xl:text-6xl leading-normal text-center"
	>
		Analytics
	</h1>

	<div class="flex flex-col sm:flex-row gap-4 sm:gap-12 lg:gap-x-24 justify-center mt-6 xl:mt-16">
		{#await data.streamed.reportsCount}
			<Counter value={0} description="Total de Reports" />
			<Counter value={0} description="Reports por Resolver" type="negative" />
			<Counter value={0} description="Reports Resolvidos" type="positive" />
		{:then reportsCount}
			<Counter value={count.total || reportsCount.total} description="Total de Reports" />
			<Counter
				value={count.unresolved || reportsCount.unresolved}
				description="Reports por Resolver"
				type="negative"
			/>
			<Counter
				value={count.resolved || reportsCount.resolved}
				description="Reports Resolvidos"
				type="positive"
			/>
		{/await}
	</div>
</section>

<section class="container mx-auto px-4 lg:px-8 mt-8 lg:mt-12">
	{#await data.streamed.monthlyCount}
		Loading...
	{:then monthlyCount}
		<MonthlyGraph data={monthlyCount} bind:this={monthlyGraph} />
	{/await}
</section>
