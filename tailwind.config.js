/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js'],
	theme: {
		extend: {
			colors: {
				'dark-green': '#17742f',
				green: '#E0E482',
				'light-green': '#F9FAE6'
			}
		}
	},
	plugins: [require('preline/plugin')]
};
