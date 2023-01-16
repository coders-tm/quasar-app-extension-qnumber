import vNumber from '@coders-tm/vue-number-format'
import QNumber from 'quasar-app-extension-qnumber/src/components/QNumber.vue'

export default ({ app }) => {
  // we globally register our component in the app
  app.use(vNumber)
  app.component('QNumber', QNumber)
}