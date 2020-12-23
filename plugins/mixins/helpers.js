import Vue from 'vue'
import { mapGetters } from 'vuex'

const Helpers = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({})
      },
      methods: {
        goBack: function() {
          this.$router.go(-1)
        },
        setFocus: function() {
          this.$nextTick(() => this.$refs.inputfocus.focus())
        },
        setFocusFirst: function() {
          setTimeout(() => {
            const input = this.$refs.inputfocus[0]
            input.focus()
          }, 10)
        },
        resetError: function() {
          this.$store.commit('vallidation/RESET_ERRORS')
        },
        mtoast(toast) {
          this.$store.commit('toast/SET_TOAST_P', toast)
        },
        fix100: function() {
          setTimeout(() => {
            if (
              this.$refs.element.getBoundingClientRect().height <
              0.9 * window.innerHeight
            ) {
              const fix =
                0.9 * window.innerHeight - this.$refs.element.offsetHeight
              this.$refs.element.style.paddingBottom = fix + 'px'
            }
          }, 15)
        },
        fix65: function() {
          setTimeout(() => {
            if (
              this.$refs.element.getBoundingClientRect().height <
              0.65 * window.innerHeight
            ) {
              const fix =
                0.65 * window.innerHeight - this.$refs.element.offsetHeight
              this.$refs.element.style.paddingBottom = fix + 'px'
            }
          }, 1)
        },
        fix75: function() {
          setTimeout(() => {
            if (
              this.$refs.element.getBoundingClientRect().height <
              0.75 * window.innerHeight
            ) {
              const fix =
                0.75 * window.innerHeight - this.$refs.element.offsetHeight
              this.$refs.element.style.paddingBottom = fix + 'px'
            }
          }, 10)
        },
        fix50: function() {
          setTimeout(() => {
            if (
              this.$refs.element.getBoundingClientRect().height <
              0.45 * window.innerHeight
            ) {
              const fix =
                0.45 * window.innerHeight - this.$refs.element.offsetHeight
              this.$refs.element.style.paddingBottom = fix + 'px'
            }
          }, 15)
        }
      }
    })
  }
}

export default () => {
  Vue.use(Helpers)
}
