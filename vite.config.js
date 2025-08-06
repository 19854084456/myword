import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // 将缓存目录设置到用户主目录下，避免权限问题
  cacheDir: '/Users/chennanfang/.vite_cache_chennanfang',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 添加服务器配置
  server: {
    host: '0.0.0.0', // 监听所有地址
    port: 5173,      // 端口号
  }
})