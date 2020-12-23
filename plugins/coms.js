import Vue from 'vue'

import Draggable from 'vuedraggable'

import PartialPage from '@/components/partials/PartialPage.vue'
import PartialPartial from '@/components/partials/PartialPartial.vue'

// utils
import ButtonBlock from '@/components/utils/ButtonBlock.vue'
import ButtonRnd from '@/components/utils/ButtonRnd.vue'
import ColorPattern from '@/components/utils/ColorPattern.vue'
import ColorPicker from '@/components/utils/ColorPicker.vue'
import DashNav from '@/components/utils/DashNav.vue'

import ModalBox from '@/components/utils/ModalBox.vue'
import Pagination from '@/components/utils/Pagination.vue'

import SelectFonts from '@/components/utils/SelectFonts.vue'
import SelectColors from '@/components/utils/SelectColors.vue'
import LangSwitcher from '../components/utils/LangSwitcher.vue'
import SelectMulti from '../components/utils/SelectMulti.vue'
import ToastBox from '../components/utils/ToastBox.vue'
import ToastItem from '../components/utils/ToastItem.vue'

// elements
// components
import ComponentDashboardNav from '../components/components/ComponentDashboardNav.vue'

export default () => {
  Vue.component('component-dashboard-nav', ComponentDashboardNav)

  // elements

  // partials
  Vue.component('partial-page', PartialPage)
  Vue.component('partial-partial', PartialPartial)

  // utils
  Vue.component('button-block', ButtonBlock)
  Vue.component('button-rnd', ButtonRnd)
  Vue.component('color-pattern', ColorPattern)
  Vue.component('color-picker', ColorPicker)
  Vue.component('dash-nav', DashNav)
  Vue.component('lang-switcher', LangSwitcher)
  Vue.component('modal-box', ModalBox)
  Vue.component('select-multi', SelectMulti)
  Vue.component('select-fonts', SelectFonts)
  Vue.component('select-colors', SelectColors)
  Vue.component('toast-box', ToastBox)
  Vue.component('toast-item', ToastItem)

  Vue.component('pagination', Pagination)

  Vue.component('draggable', Draggable)
}
// components
