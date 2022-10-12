import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths()
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://0.0.0.0:80',
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})