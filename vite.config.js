import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
export default defineConfig({
    define: {
        'process.env': process.env
    },
    build: {
        rollupOptions: {
            external: ['bootstrap'],
            input: {
                main: path.resolve(__dirname, 'index.html')
            },
        },
    }
});