<script>
	import BottomMenu from '$lib/components/BottomMenu.svelte';
	import '../app.css';
</script>

<div class="container mx-auto px-6 sm:px-8 pb-24">
	<slot />
</div>

<BottomMenu />

<style>
	:global(html) {
		background: linear-gradient(225deg, #fff 0%, #f9fae6 100%);
	}

	:global(html, body) {
		min-height: 100%;
	}
</style>
