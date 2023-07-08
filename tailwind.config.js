/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js'],
	theme: {
		extend: {
			boxShadow: {
				button: '0px 4px 20px 0px rgba(23, 116, 47, 0.10)'
			},
			colors: {
				'dark-green': '#17742f'
			}
		}
	},
	plugins: [require('preline/plugin')]
};
