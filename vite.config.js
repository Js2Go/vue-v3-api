const API_URL = 'http://localhost:9000'
const VITE_API_BASE_URL = '/api'

module.exports = {
  proxy: {
    [VITE_API_BASE_URL]: {
      target: API_URL,
      changeOrigin: true,
      rewrite: path => {
        return path.replace(`^${VITE_API_BASE_URL}`, '')
      }
    }
  }
}
// export default {
//   proxy: {
//     [import.meta.env.VITE_API_BASE_URL]: {
//       target: API_URL,
//       changeOrigin: true,
//       rewrite: path => {
//         return path.replace(`^${import.meta.env.VITE_API_BASE_URL}`, '')
//       }
//     }
//   }
// }
