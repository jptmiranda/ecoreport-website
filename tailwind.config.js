/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			boxShadow: {
				s: '0px 2px 10px 0px rgba(23, 116, 47, 0.10)'
			},
			colors: {
				'dark-green': '#17742f',
				green: '#E0E482',
				'light-green': '#F9FAE6',
				grey: '#312F2E'
			},
			fontFamily: {
				'uncut-sans': ['Uncut Sans']
			}
		}
	},
	plugins: [require('preline/plugin')]
};
