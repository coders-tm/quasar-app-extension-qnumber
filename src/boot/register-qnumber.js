import VueNumber from '@coders-tm/vue-number-format'
import QNumber from 'quasar-app-extension-qnumber/src/components/QNumber.vue'

export default ({ app }) => {
  // we globally register our component in the app
  app.use(VueNumber)
  app.component('QNumber', QNumber)
}