// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'http://127.0.0.1:3500',
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:3500',
    },
  },
});
