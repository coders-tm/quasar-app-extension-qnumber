/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf, api) {
  // make sure qnumber boot file is registered
  conf.boot.push('~quasar-app-extension-qnumber/src/boot/register-qnumber.js')

  if (api.hasVite !== true) {
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-qnumber[\\/]src[\\/]boot/)
    // if boot file imports anything, make sure that
    // the regex above matches those files too!
  }
}

module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^2.*')

  // Here we extend /quasar.conf.js, so we can add
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf(extendConf)
}