/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Michroma'],
				sans: ['Montserrat']
			},
			colors: {
				'dark': '#10070F',
				'dark2': '#21141F'
			},
			container: {
				center: true
			}
		},
	},
	plugins: [],
}
