<script lang="ts">
	import Counter from '$lib/components/reports/Counter.svelte';
	import MonthlyGraph from '$lib/components/reports/MonthlyGraph.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

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

					data.totalCount = count.total;
					data.unresolvedCount = count.unresolved;
					data.resolvedCount = count.resolved;
				}
			}
		)
		.subscribe();
</script>

<section class="container mx-auto px-4 lg:px-8 mt-8 lg:mt-12">
	<h1
		class="text-eco-gradient font-bold text-3xl sm:text-4xl xl:text-6xl leading-normal text-center"
	>
		Analytics
	</h1>

	<div class="flex flex-col sm:flex-row gap-4 sm:gap-12 lg:gap-x-24 justify-center mt-6 xl:mt-16">
		<Counter value={data.totalCount} description="Total de Reports" />
		<Counter value={data.unresolvedCount} description="Reports por Resolver" type="negative" />
		<Counter value={data.resolvedCount} description="Reports Resolvidos" type="positive" />
	</div>
</section>

<MonthlyGraph data={data.monthlyCount} />
