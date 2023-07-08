<script>
	import logo from '$lib/assets/logo.png';
	import Button from '$lib/components/Button.svelte';
	import FeArrowRight from '~icons/fe/arrow-right';
</script>

<div class="h-full container mx-auto px-6 sm:px-8 pb-4">
	<h1
		class="mt-4 text-transparent bg-gradient-to-r from-[#17742F] to-[#E0E482] text-[40px] bg-clip-text leading-normal font-bold inline-block"
	>
		<span class="text-[#17742f] font-normal">Eco</span>Report
	</h1>

	<h2 class="mt-3 text-xl font-bold text-[#17742f]">Faça a diferença, report a poluição</h2>

	<img class="mx-auto w-full" src={logo} alt="Ecoreport" />

	<div class="flex flex-col gap-y-3">
		<Button text="New Report" full cta>
			<FeArrowRight slot="suffix-icon" />
		</Button>

		<Button text="View Reports" full>
			<FeArrowRight slot="suffix-icon" />
		</Button>

		<Button text="About Us" full>
			<FeArrowRight slot="suffix-icon" />
		</Button>

		<Button text="Support Us" full>
			<FeArrowRight slot="suffix-icon" />
		</Button>
	</div>
</div>
