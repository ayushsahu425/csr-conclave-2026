// Builds a single self-contained index.html (JS, CSS and images inlined) for sharing a preview.
// Usage: npx vite build --config vite.preview.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: { outDir: 'dist-preview', assetsInlineLimit: 100_000_000 },
});
