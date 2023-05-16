/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  ssr: {
    noExternal: ['xhr2']
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog(), {
    name: 'test',
    transform(code) {
      if (code.includes('os.type()')) {
        return {
          code: code.replace('os.type()', `''`).replace('os.arch()', `''`)
        }
      }
      return;
    }
   }],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
    'process.versions.node': `'node'`,
    'process.versions.v8': `'v8'`
  },
}));
