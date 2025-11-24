import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  define: {
    // 兼容代码中使用的 process.env.API_KEY
    'process.env.API_KEY': 'import.meta.env.VITE_API_KEY'
  }
});
