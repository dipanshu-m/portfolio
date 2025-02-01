import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'


console.log('process.env.NODE_ENV', process.env.NODE_ENV);
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: process.env.NODE_ENV === 'development' ? '/' : '/portfolio',
});
