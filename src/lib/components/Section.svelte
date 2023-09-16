<script lang="ts">
	export let name: string;
	export let main: 'left' | 'right' | undefined = undefined;

	const LARGE_SIZE = 'w-2/3';
	const SMALL_SIZE = 'w-1/3';
	const MID_SIZE = 'w-1/2';
	const sizer = (side: string) => (main ? (main === side ? LARGE_SIZE : SMALL_SIZE) : MID_SIZE);
</script>

<section
	id={name}
	class="container mx-auto px-4 lg:px-36 pt-8 lg:pt-14 flex justify-center items-center gap-x-14 xl:gap-x-28"
	aria-labelledby="section-heading"
>
	<div class={`${sizer('left')}`}>
		<slot name="left" />
	</div>

	<div class={`${sizer('right')}`}>
		<slot name="right" />
	</div>
</section>
