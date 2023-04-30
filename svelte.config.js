import { vitePreprocess } from '@sveltejs/kit/vite'
import netlify from '@sveltejs/adapter-netlify'

import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: netlify(),
		alias: {
			'@': '/src',
		},
	},
}

export default config
