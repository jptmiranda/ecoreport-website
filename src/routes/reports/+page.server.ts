import type { MonthlyReport } from '$lib/types.js';
import type { SupabaseClient } from '@supabase/supabase-js';

const fetchReportsCount = async (supabase: SupabaseClient) => {
	const { data } = await supabase.rpc('count_reports');

	return {
		resolved: data.resolved,
		unresolved: data.unresolved,
		total: data.total
	};
};

const fetchMonthlyCounts = async (supabase: SupabaseClient) => {
	const { data } = (await supabase.from('monthly_reports_count').select()) as {
		data: MonthlyReport[];
	};

	return data;
};

export const load = async ({ locals: { supabase } }) => {
	return {
		reportsCount: fetchReportsCount(supabase),
		monthlyCount: fetchMonthlyCounts(supabase)
	};
};
