export const load = async ({ parent }) => {
	const { supabase } = await parent();

	const { data: resolvedCount } = await supabase.rpc('count_reports', { arg_is_resolved: true });
	const { data: unresolvedCount } = await supabase.rpc('count_reports', { arg_is_resolved: false });
	const totalCount = resolvedCount + unresolvedCount;

	return {
		resolvedCount,
		unresolvedCount,
		totalCount
	};
};
