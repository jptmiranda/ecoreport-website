export const load = async ({ parent }) => {
	const { supabase } = await parent();
	const { data: reportsCount } = await supabase.rpc('count_reports');
	const startDate = new Date();
	startDate.setDate(1);
	startDate.setMonth(0);
	const endDate = new Date();
	endDate.setDate(31);
	endDate.setMonth(11);

	const { data: totalMonthlyCount } = await supabase.from('monthly_total_reports_count').select();
	const mappedTotalMonthlyCount = totalMonthlyCount?.map((row) => {
		return {
			value: row.monthly_count,
			month: row.month,
			type: 'total'
		};
	});
	const { data: resolvedMonthlyCount } = await supabase
		.from('monthly_resolved_reports_count')
		.select();
	const mappedResolvedMonthlyCount = resolvedMonthlyCount?.map((row) => {
		return {
			value: row.monthly_count,
			month: row.month,
			type: 'resolved'
		};
	});

	return {
		resolvedCount: reportsCount.resolved,
		unresolvedCount: reportsCount.unresolved,
		totalCount: reportsCount.total,
		test: mappedTotalMonthlyCount,
		monthly: [
			{
				type: 'total',
				values: mappedTotalMonthlyCount
			},
			{
				type: 'resolved',
				values: mappedResolvedMonthlyCount
			}
		]
	};
};
