<template>
  <q-page padding>
    <q-number @update:model-value="onChange" :options="options"  dense outlined v-model="price"/>
    <CurrencyFormat class="q-mt-lg" v-model="price2"/>
  </q-page>
</template>

<script>
import CurrencyFormat from 'components/CurrencyFormat.vue';

export default {
  components: { CurrencyFormat },
  data() {
    return {
      price: 123456.98,
      price2: 123456.98,
      options: {
        prefix: '$'
      }
    }
  },
  methods: {
    onChange (value) {
      this.price2 = value * 1.2
    }
  }
}
</script>
