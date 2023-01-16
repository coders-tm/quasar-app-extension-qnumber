[![npm Version](https://badgen.net/npm/v/quasar-app-extension-qnumber?color=green)](https://www.npmjs.com/package/quasar-app-extension-qnumber)
[![npm Downloads](https://badgen.net/npm/dt/quasar-app-extension-qnumber?color=green)](https://www.npmjs.com/package/quasar-app-extension-qnumber)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/quasar-app-extension-qnumber?color=green)](https://bundlephobia.com/result?p=quasar-app-extension-qnumber)

Quasar App Extension qnumber
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

# Info
> Add longer information here that will help the user of your app extension.

# Other Info
> Add other information that's not as important to know

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
