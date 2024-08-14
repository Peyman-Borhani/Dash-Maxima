import  adapter  from '@sveltejs/adapter-static';
import  {vitePreprocess}  from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
	kit: {
        // appDir: 'app',
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
        alias: {
            "@/*": "./src/lib/*",
           // "icns": "node_modules/lucide-svelte/dist/icons",
           // "icns/*": "node_modules/lucide-svelte/dist/icons/*"
        },
        
	}
};

export default config;
