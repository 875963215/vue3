import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
//引入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
export default defineConfig({
    plugins: [
        vue(),
        //配置插件
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports:['vue','vue-router']
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
