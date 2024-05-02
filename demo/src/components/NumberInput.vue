<template>
  <q-number
    square
    dense
    outlined
    :model-value="modelValue"
    :options="options"
    @update:model-value="onChange"
    :disable="disable"
    :readonly="readonly"
    :bg-color="bgColor"
  />
</template>

<script>
export default {
  name: "NumberInput",
  props: {
    min: [Number, String],
    max: [Number, String],
    modelValue: [String, Number],
    disable: Boolean,
    bgColor: String,
    readonly: Boolean,
  },
  emits: ["update:model-value"],
  methods: {
    onChange(value) {
      console.func("components/NumberInput.vue:methods.onChange()", arguments);
      if (
        this.readonly ||
        this.disable ||
        parseFloat(value) === parseFloat(this.modelValue)
      ) {
        return false;
      }
      this.$emit("update:model-value", value);
    },
  },
  computed: {
    options() {
      return {
        decimal: ".",
        separator: "",
        prefix: "",
        suffix: "",
        precision: 2,
        nullValue: "",
        masked: false,
        reverseFill: false,
        min: parseFloat(this.min),
        max: parseFloat(this.max),
        minimumFractionDigits: 2,
      };
    },
  },
};
</script>
