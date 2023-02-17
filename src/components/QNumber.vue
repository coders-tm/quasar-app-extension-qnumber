<template>
  <q-field
    class="q-number"
    :model-value="modelValue"
    @update:model-value="onChange"
    borderless
  >
    <template v-slot:control="{ id, modelValue, emitValue }">
      <vue-number
        :id="id"
        class="q-field__input"
        :model-value="modelValue"
        @update:model-value="emitValue"
        v-bind="options"
        :placeholder="placeholder"
      />
    </template>
    <template v-for="slot in scopedSlots" v-slot:[slot]="props">
      <slot :name="slot" v-bind="props" v-bind:props="props"></slot>
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
    }
  },
  emits: ["update:model-value"],
  methods: {
    onChange(val) {
      this.$emit("update:model-value", val);
    },
  },
  computed: {
    scopedSlots() {
      return Object.keys(this.$slots);
    }
  },
};
</script>
  