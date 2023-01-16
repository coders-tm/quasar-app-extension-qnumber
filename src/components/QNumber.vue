<template>
    <q-field
      @update:model-value="onChange"
    >
      <template v-slot:control="{ id, modelValue, emitValue }">
        <number
          :id="id"
          class="q-field__input"
          :model-value="modelValue"
          @update:model-value="emitValue"
          v-bind="options"
          :placeholder="placeholder"
        />
      </template>
    </q-field>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: [String, Number],
      placeholder: {
        required: false,
        type: [String],
        default: "0.00",
      },
      options: {
        type: Object,
        default: () => ({
            precision: 2,
            minimumFractionDigits: 2,
        })
      },
      borderless: Boolean,
    },
    emits: ["update:model-value"],
    methods: {
      onChange(val) {
        this.$emit("update:model-value", val);
      },
    },
  };
  </script>
  