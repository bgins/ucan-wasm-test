import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    fs: {
      allow: [ '..', '../../code/fission/rs-ucan/ucan-wasm' ],
    },
  },
})