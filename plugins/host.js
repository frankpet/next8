export default function({ store, req }) {
  if (process.server) store.commit('init/SET_HOST', req.headers.host)
}
