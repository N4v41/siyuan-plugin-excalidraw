// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': '\'development\'',
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src', "index.js"),
            formats: ['cjs'],
            fileName: 'index',
        },
        commonjsOptions: {
            defaultIsModuleExports: true,
        },
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src', "index.js"),
            },
            output: {
                dir: './',
                name: 'index',
                format: 'commonjs',
                esModule: 'if-default-prop',
                manualChunks: undefined,
            },
            external: ['siyuan'],
        },
        //Whether to generate a source map file after building
        sourcemap: false,
    },
})