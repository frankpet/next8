module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console' :'off',
    //"vue/no-use-v-if-with-v-for": "off",
    'nuxt/no-cjs-in-config': 'off',
    'nuxt/no-globals-in-created': 'off',
    //'vue/no-v-html' : 'off',
    //'vue/valid-v-model' : 'off',
    //'vue/no-template-key' : 'off',
    'eqeqeq' : 'off',
    'vue/require-component-is' : 'off',
    // 'no-irregular-whitespace' : 'off'
  }
}
