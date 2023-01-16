import vNumber from '@coders-tm/vue-number-format'

export default ({ app }) => {
  // we globally register our component in the app
  app.use(vNumber)
}