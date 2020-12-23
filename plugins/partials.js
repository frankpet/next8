import Vue from 'vue'

import PartialPage from '@/components/partials/PartialPage.vue'
import PartialPartial from '@/components/partials/PartialPartial.vue'

export default () => {
  // partials
  Vue.component('partial-page', PartialPage)
  Vue.component('partial-partial', PartialPartial)
}
