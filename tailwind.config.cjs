const { tailwindConfig } = require('@f*g/felix')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				...tailwindConfig,
			},
		},
	},
	plugins: [],
}
