import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: { experimental: { async: true } },
    preprocess: [vitePreprocess(), mdsvex()],
    kit: {
        // appDir: 'app',
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        experimental: { remoteFunctions: true },
        adapter: adapter(),
        paths: {base: process.argv.includes('dev') ? '' : process.env.BASE_PATH}
        ,
        alias: { '@/*': './src/lib/*',
                 '$lib': './src/lib',
                 '$lib/*': './src/lib/*'
        }
    },
    extensions: ['.svelte', '.svx']
};

export default config;
