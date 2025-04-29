import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',  // Specify the build output directory
    assetsDir: 'assets',  // Folder for static assets like images, fonts, etc.
    rollupOptions: {
      input: 'index.html', // Main entry file for the app
      output: {
        // Optional: Customize how assets are named
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name].js',
      }
    },
    minify: 'esbuild',  // Use esbuild for faster minification
    sourcemap: false,  // Disable sourcemaps for production (can enable for debugging)
  },
})
