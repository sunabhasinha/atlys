/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-gray': '#7F8084',
				'dark-gray': '#191920',
				'dark-gray-2': '#35373B',
				'dark-gray-3': '#131319',
				'light-gray-2': '#27292D',
				'white-1': '#C5C7CA',
				'blue-1': '#4A96FF',
			},
		},
	},
	plugins: [],
};
