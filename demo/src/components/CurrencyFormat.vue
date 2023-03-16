<template>
  <q-number
    dense
    outlined
    bg-color="white"
    :bottom-slots="bottomSlot"
    :model-value="modelValue"
    :options="currencyOptions"
    @update:model-value="onChange"
    :disable="isDisabled"
  />
</template>

<script>
export default {
  name: 'CurrencyFormat',
  props: {
    modelValue: [String, Number],
    bottomSlot: Boolean,
    isDisabled: Boolean
  },
  emits: ["update:model-value"],
  methods: {
    onChange(value) {
      console.log('components/base/currency-format:methods.onChange()', arguments)
      this.$emit('update:model-value', value)
    }
  },
  computed: {
    currencyOptions() {
      return {
        prefix: '£',
        precision: 2,
        min: 0
      }
    }
  }
}
</script>
