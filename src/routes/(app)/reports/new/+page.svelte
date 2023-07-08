<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, setContext } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import FeTrash from '~icons/fe/trash';

	let cameraInput: HTMLInputElement;
	const images = writable<File[]>([]);
	const imageURLs = derived(images, ($images) =>
		$images.map((image) => URL.createObjectURL(image))
	);

	onMount(async () => {
		const openCamera = Boolean($page.url.searchParams.get('openCamera'));
		let isMobile = false;
		let hasCamera = false;

		// check for mobile
		const userAgent = navigator.userAgent || navigator.vendor;
		if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
			isMobile = true;
		}

		// check for camera
		if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
			console.log('enumerateDevices() not supported.');
			return;
		}

		// list cameras and microphones.
		const devices = await navigator.mediaDevices.enumerateDevices();

		devices.forEach((device) => {
			if (device.kind === 'videoinput') {
				hasCamera = true;
			}
		});

		if (openCamera && isMobile && hasCamera) {
			$page.url.searchParams.delete('openCamera');
			cameraInput.click();
		}
	});

	const handleFiles = () => {
		images.update(($images) => {
			if (cameraInput.files) {
				$images = [...$images, ...Array.from(cameraInput.files)];
			}
			return $images;
		});
	};

	const removeImage = (index: number) => {
		images.update(($images) => {
			$images.splice(index, 1);
			return $images;
		});
	};

	setContext('newReportImages', images);
</script>

<div class="pt-6">
	<h2 class="font-bold text-center text-2xl">Confirm report evidence</h2>

	<p class="text-sm mt-4 text-center">
		Choose the photos and vídeos you want to add as visual evidence of the report
	</p>

	<input
		class="hidden"
		bind:this={cameraInput}
		on:change={handleFiles}
		type="file"
		accept="image/*"
		id="cameraInput"
		name="cameraInput"
		capture
		multiple
	/>

	<button on:click={() => cameraInput.click()}>Take/Upload Photo</button>

	<ul class="flex flex-col gap-y-2">
		{#each $imageURLs as url, index ($imageURLs[index])}
			<li class="relative">
				<img class="rounded-lg object-fit w-full" src={url} alt={`Image ${index + 1}`} />

				<button
					on:click={() => removeImage(index)}
					class="text-dark-green bg-light-green opacity-60 absolute bottom-4 right-4 rounded-[4px] text-4xl p-1"
					type="button"
				>
					<FeTrash />
				</button>
			</li>
		{/each}
	</ul>
</div>
