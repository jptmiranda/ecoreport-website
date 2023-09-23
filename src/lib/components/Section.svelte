<script lang="ts">
	import { cn } from '$lib/utils';

	export let name: string;
	export let main: 'left' | 'right' | undefined = undefined;

	const LARGE_SIZE = 'lg:w-2/3';
	const SMALL_SIZE = 'lg:w-1/3';
	const MID_SIZE = 'lg:w-1/2';
	const sizer = (side: string) => (main ? (main === side ? LARGE_SIZE : SMALL_SIZE) : MID_SIZE);
	// const preSizer = (side: string) => {
	// 	main ? (main === side ? 'w-full ')
	// }
</script>

<section
	id={name}
	class="container mx-auto px-4 lg:px-24 xl:px-36 pt-8 lg:pt-14 flex justify-center items-center lg:gap-x-14 xl:gap-x-28"
	aria-labelledby="section-heading"
>
	<div class={cn('w-full', sizer('left'))}>
		<slot name="left" />
	</div>

	<div class={cn('w-0', sizer('right'))}>
		<slot name="right" />
	</div>
</section>
