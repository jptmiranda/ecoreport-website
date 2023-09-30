import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		icons({
			scale: 1.2,
			compiler: 'svelte'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
