import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import icons from 'unplugin-icons/vite';
import { readFileSync } from 'fs';

const localHttpsOptions = {
	key: readFileSync(`${__dirname}/key.pem`),
	cert: readFileSync(`${__dirname}/cert.pem`)
};

export default defineConfig({
	plugins: [
		sveltekit(),
		icons({
			compiler: 'svelte',
			scale: 1.2,
			autoInstall: true
		})
	],
	server: {
		https: process.env.NODE_ENV !== 'production' ? localHttpsOptions : false
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
