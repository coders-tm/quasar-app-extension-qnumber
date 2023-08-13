<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-xs-12 col-sm-4">
        <div class="text-subtitle2">Currency</div>
        <q-number :options="options"  dense outlined v-model="price"/>
        <div class="text-secondary">Value: {{ price }}</div>
      </div>
      <div class="col-xs-12 col-sm-4">
        <div class="text-subtitle2">Percentage</div>
        <q-number :options="optionsParcent"  dense outlined v-model="parcent"/>
        <div class="text-secondary">Value: {{ parcent }}</div>
      </div>
      <div class="col-xs-12 col-sm-4">
        <div class="text-subtitle2">Reverse Fill</div>
        <q-number masked :options="optionsReverseFill"  dense outlined v-model="reverseFill"/>
        <div class="text-secondary">Value: {{ reverseFill }}</div>
      </div>
      <div class="col-xs-12 col-sm-12">
        <a href="https://github.com/coders-tm/quasar-app-extension-qnumber/blob/master/demo/src/pages/IndexPage.vue" target="_blank" rel="noopener noreferrer">Example</a>
      </div>
    </div>
  </q-page>
</template>

<script>
// import QNumber from "components/QNumber.vue";
export default {
  // components: {QNumber},
  data() {
    return {
      price: 123456.98,
      options: {
        prefix: '£',
        suffix: '',
        reverseFill: false,
        min: undefined,
        max: undefined,
      },
      parcent: 8.50,
      optionsParcent: {
        suffix: '%',
        min: 0,
        max: 100,
        reverseFill: false,
        prefix: ''
      },
      reverseFill: '12438.56',
      optionsReverseFill: {
        prefix: '£',
        reverseFill: true,
        min: undefined,
        max: undefined,
        suffix: '',
      }
    }
  }
}
</script>
