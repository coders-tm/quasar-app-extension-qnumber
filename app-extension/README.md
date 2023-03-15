![quasar-app-extension-qnumber](https://img.shields.io/npm/v/quasar-app-extension-qnumber?label=quasar-app-extension-qnumber)
![quasar-app-extension-qnumber](https://img.shields.io/npm/v/quasar-app-extension-qnumber?label=quasar-app-extension-qnumber)
[![npm](https://img.shields.io/npm/dt/quasar-app-extension-qnumber)](https://www.npmjs.com/package/quasar-app-extension-qnumber)
![quasar-app-extension-qnumber](https://img.shields.io/npm/dm/quasar-app-extension-qnumber)
[![](https://data.jsdelivr.com/v1/package/npm/quasar-app-extension-qnumber/badge)](https://www.jsdelivr.com/package/npm/quasar-app-extension-qnumber)

Quasar App Extension QNumber
===

The QNumber component is used to capture number input from the user. It uses v-model, similar to a regular input. It has support for errors and validation, and comes in a variety of styles, colors, and types.

# Install
```bash
quasar ext add qnumber
```
Quasar CLI will retrieve it from the NPM registry and install the extension to your project.

## Example

```
<q-number
    v-model="modelValue"
    @update:model-value="onChange"

    // options: https://vue-number-format.netlify.app/guide/config.html
    :options="{
        prefix: '$',
        suffix: '',
        separator: ',',
        decimal: '.',
        precision: 2,
        prefill: true,
        reverseFill: false,
        min: false,
        max: false,
        nullValue: ''
    }"
/>
```

# Uninstall
```bash
quasar ext remove qnumber
```

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
