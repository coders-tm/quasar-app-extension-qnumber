<template>
  <q-page padding>
    <q-number borderless v-model="price">
      <template #prefix>
        <div>
          Hello
        </div>
      </template>
    </q-number>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      price: 123456.98
    }
  },
}
</script>
