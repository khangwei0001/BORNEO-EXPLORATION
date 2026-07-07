import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The `content/` folder at the project root holds all imagery/video.
// We reference it via import.meta.glob from src (see src/lib/assets.ts).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    fs: { allow: ['..', '.'] },
  },
})
