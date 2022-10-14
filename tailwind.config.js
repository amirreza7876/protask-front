/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	], theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				'moon': ['Moon']
			},
			backgroundImage: {
				'login': "url('/src/images/Project-Manager-Roles-And-Responsibilities.jpg')",
			}
		},
	},
	plugins: [],
}
