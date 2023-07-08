<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import FeHome from '~icons/fe/home';
	import FeCamera from '~icons/fe/camera';
	import FeUser from '~icons/fe/user';
</script>

<div class="sticky bottom-0 bg-white w-full py-3">
	<div class="container mx-auto flex justify-center items-center gap-12">
		<a
			class:!bg-light-green={$page.url.pathname === '/'}
			class:!text-dark-green={$page.url.pathname === '/'}
			class="cursor-pointer text-gray-400 p-2 rounded-full text-3xl"
			href="/"
		>
			<FeHome />
		</a>

		<a
			class:!bg-light-green={$page.url.pathname === '/reports/new'}
			class:!text-dark-green={$page.url.pathname === '/reports/new'}
			class="cursor-pointer text-gray-400 p-2 rounded-full text-3xl"
			href="/reports/new?openCamera=true"
		>
			<FeCamera />
		</a>

		<a
			class:!bg-light-green={$page.url.pathname === '/user'}
			class:!text-dark-green={$page.url.pathname === '/user'}
			class="cursor-pointer text-gray-400 p-2 rounded-full text-3xl"
			href="/"
		>
			<FeUser />
		</a>
	</div>
</div>
