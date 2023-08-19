import type { MonthlyReport } from '$lib/types.js';

export const load = async ({ locals: { supabase } }) => {
	const { data: reportsCount } = await supabase.rpc('count_reports');
	const { data: monthlyCount } = (await supabase.from('monthly_reports_count').select()) as {
		data: MonthlyReport[];
	};

	return {
		resolvedCount: reportsCount.resolved,
		unresolvedCount: reportsCount.unresolved,
		totalCount: reportsCount.total,
		monthlyCount
	};
};
