<template>
  <q-page padding>
    <q-number @update:model-value="onChange" :options="options"  dense outlined v-model="price"/>
    <!-- <q-code/> -->
  </q-page>
</template>

<script>
// import QCode from 'components/QCode.vue'
export default {
  // components: { QCode },
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
      //
    }
  }
}
</script>
