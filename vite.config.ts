import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publicado em https://fflucasff.github.io/vertice-cirurgia/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/vertice-cirurgia/' : '/',
  plugins: [react()],
}))
