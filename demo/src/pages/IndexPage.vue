<template>
  <q-page padding>
    <q-number @update:model-value="onChange" :options="options"  dense outlined v-model="price"/>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      price: 123456.98,
      options: {
        prefix: '$'
      }
    }
  },
  methods: {
    onChange () {
      console.log('onChange');
      setTimeout(() => {
        this.price = 5005.256
      }, 3000);
    }
  }
}
</script>
