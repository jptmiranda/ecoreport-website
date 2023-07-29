export const load = async ({ parent }) => {
	const { supabase } = await parent();
	const { data } = await supabase.rpc('count_reports');

	return {
		resolvedCount: data.resolved,
		unresolvedCount: data.unresolved,
		totalCount: data.total
	};
};
