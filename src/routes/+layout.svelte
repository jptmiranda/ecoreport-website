<script>
	import '../app.css';
</script>

<slot />

<style>
	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: linear-gradient(225deg, #fff 0%, #f9fae6 100%);
	}
</style>
