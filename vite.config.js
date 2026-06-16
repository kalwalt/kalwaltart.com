import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets/dist',
    assetsDir: '', // output assets directly in outDir
    emptyOutDir: true, // clear dist directory before building
    rollupOptions: {
      input: {
        main: 'src/main.js'
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].js'
      }
    }
  }
});
