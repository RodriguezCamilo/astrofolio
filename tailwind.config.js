/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				"spinnin": {
					'0%': { transform: 'rotate(0deg) scale(1, 1)' },
					"25%" : {transform: "rotate(90deg) scale(2.5, 2)"},
					"50%" : {transform: "rotate(180deg) scale(2, 2)"},
					"75%" : {transform: "rotate(270deg) scale(2, 2.5)"},
					"100%":  { transform: 'rotate(360deg) scale(2, 2)' }
				}
			},
			animation: {
				"spinnin": "spinnin 20s linear infinite"
			}
		}
	},
	plugins: [],
}

