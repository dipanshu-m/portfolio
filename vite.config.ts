import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'development' ? '/' : '/portfolio',
});
