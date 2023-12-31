import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteVueCE } from 'unplugin-vue-ce'
import type { PluginOption } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const customElement = mode === 'production';

  return defineConfig({
    plugins: [
      vue({
        customElement: customElement,
      }),
      viteVueCE() as PluginOption,
    ],
     build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/library.ts'),
        name: 'MyLib',
        // the proper extensions will be added
        fileName: 'my-lib',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  })
})

// export default 
