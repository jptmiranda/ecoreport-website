import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import icons from 'unplugin-icons/vite';
import { partytownVite } from '@builder.io/partytown/utils';
import { join } from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		icons({
			scale: 1.2,
			compiler: 'svelte'
		}),
		partytownVite({
			dest: join(process.cwd(), '.svelte-kit/output/client/~partytown')
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
