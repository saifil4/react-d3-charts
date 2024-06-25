import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      layouts: "/src/layouts",
      "react-d3": "/src/react-d3",
      sections: "/src/sections",
    },
  },
})
