import { svelte } from '@sveltejs/vite-plugin-svelte';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins: PluginOption[] = [svelte()];
  return {
    plugins,
  };
});
