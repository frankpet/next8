import Vue from 'vue'
import { mapGetters } from 'vuex'

const Starters = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          locale: 'i18n/getLanguage',
          init: 'init/getInit',
          host: 'init/getHost',
          roles: 'init/getRoles',
          site: 'site/getSite',
          template: 'template/getTemplate',
          dashStart: 'template/getStart',
          dashActive: 'template/getDashActive',
          dashboard: 'template/getDashboard',
          reset: 'template/getReset',
          refresh: 'template/getReset',
          user: 'getUser',
          authenticated: 'authenticated',
          errors: 'validation/errors',
          status: 'message/getStatus',
          message: 'message/getMessage',
          toasts: 'toast/getToasts'
        })
      }
    })
  }
}

export default () => {
  Vue.use(Starters)
}
