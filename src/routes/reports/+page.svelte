<script lang="ts">
	import Counter from '$lib/components/reports/Counter.svelte';
	import MonthlyGraph from '$lib/components/reports/MonthlyGraph.svelte';
	import type { MonthlyReport } from '$lib/types';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		data.supabase
			.channel('schema-db-changes')
			.on(
				'postgres_changes',
				{
					event: 'INSERT',
					schema: 'public'
				},
				async (payload) => {
					if (payload.table === 'reports') {
						const { data: count } = await data.supabase.rpc('count_reports');
						const { data: monthlyCount } = (await data.supabase
							.from('monthly_reports_count')
							.select()) as {
							data: MonthlyReport[];
						};

						data.reportsCount.total = count.total;
						data.reportsCount.unresolved = count.unresolved;
						data.reportsCount.resolved = count.resolved;
						data.monthlyCount = monthlyCount;
					}
				}
			)
			.subscribe();
	});
</script>

<section class="container mx-auto px-4 lg:px-8 mt-8 lg:mt-12">
	<h1
		class="text-eco-gradient font-bold text-3xl sm:text-4xl xl:text-6xl leading-normal text-center"
	>
		Analytics
	</h1>

	<div class="flex flex-col sm:flex-row gap-4 sm:gap-12 lg:gap-x-24 justify-center mt-6 xl:mt-16">
		{#await data.reportsCount}
			<Counter value={0} description="Total de Reports" />
			<Counter value={0} description="Reports por Resolver" type="negative" />
			<Counter value={0} description="Reports Resolvidos" type="positive" />
		{:then reportsCount}
			<Counter value={reportsCount.total} description="Total de Reports" />
			<Counter value={reportsCount.unresolved} description="Reports por Resolver" type="negative" />
			<Counter value={reportsCount.resolved} description="Reports Resolvidos" type="positive" />
		{/await}
	</div>
</section>

{#await data.monthlyCount}
	Loading...
{:then monthlyCount}
	<MonthlyGraph data={monthlyCount} />
{/await}
