import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'src/index.tsx',
      exclude: [
        /.*\.css$/,
        /.*\.scss$/,
        /.*\.ts$/,
        /.*\.tsx$/,
        /^\/@.+$/,
        /\?t\=\d+$/,
        /^\/favicon\.ico$/,
        /^\/static\/.+/,
        /^\/node_modules\/.*/
      ]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'static/assets/[name].[ext]'
      }
    }
  }
})
