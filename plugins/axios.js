export default function({ $axios, store, req, redirect, error }) {
  $axios.onResponse(res => {
    res.data.status = res.status
    store.commit('message/SET_STATUS', res.status)
    return res
  })

  $axios.onError(e => {
    if (e.response.status === 422) {
      store.dispatch('validation/setErrors', e.response.data.errors)
    }
    if (e.response.status === 404) {
      store.dispatch('validation/setErrors', e.response.data.errors)
    }
    if (e.response.status === 403) {
      return redirect('/message')
    }
    if (e.response.status === 401) {
      store.dispatch('validation/setErrors', e.response.data.errors)
    }

    return Promise.reject(error)
  })

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })
}
