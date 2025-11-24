import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // 兼容代码中使用的 process.env.API_KEY，将其指向 Vite 的环境变量
    'process.env.API_KEY': 'import.meta.env.VITE_API_KEY'
  }
});