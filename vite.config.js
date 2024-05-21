import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import postcss from './postcss.config.cjs'

// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     'process.env': process.env
//   },
//   css: {
//     postcss,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: [
//       {
//         find: /^~.+/,
//         replacement: (val) => {
//           return val.replace(/^~/, "");
//         },
//       },
//     ],
//   },
//   build: {
//     commonjsOptions: {
//       transformMixedEsModules: true,
//     }
//   } 
// })
