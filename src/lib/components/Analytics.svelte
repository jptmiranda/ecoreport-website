<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-JXHVEJJL2B"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-JXHVEJJL2B');
		</script> -->

<script lang="ts">
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-JXHVEJJL2B', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-JXHVEJJL2B"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-JXHVEJJL2B');
	</script>
</svelte:head>
