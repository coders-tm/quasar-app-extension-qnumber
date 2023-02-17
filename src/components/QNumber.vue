<template>
  <q-field
    class="q-number"
    :model-value="modelValue"
    @update:model-value="onChange"
    :label="label"
    :stack-label="stackLabel"
    :hint="hint"
    :hide-hint="hideHint"
    :prefix="prefix"
    :suffix="suffix"
    :label-color="labelColor"
    :color="color"
    :bg-color="bgColor"
    :filled="filled"
    :outlined="outlined"
    :borderless="borderless"
    :standout="standout"
    :square="square"
    :loading="loading"
    :label-slot="labelSlot"
    :bottom-slots="bottomSlots"
    :hide-bottom-space="hideBottomSpace"
    :rounded="rounded"
    :dense="dense"
    :clearable="clearable"
    :clearIcon="clearIcon"
    :disable="disable"
    :readonly="readonly"
    :autofocus="autofocus"
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
      type: String,
      default: "0.00",
    },
    options: {
      type: Object,
      default: () => ({
          precision: 2,
          minimumFractionDigits: 2,
      })
    },
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,

    labelColor: String,
    color: String,
    bgColor: String,

    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],

    square: Boolean,

    loading: Boolean,

    labelSlot: Boolean,

    bottomSlots: Boolean,
    hideBottomSpace: Boolean,

    rounded: Boolean,
    dense: Boolean,

    clearable: Boolean,
    clearIcon: String,

    disable: Boolean,
    readonly: Boolean,

    autofocus: Boolean,
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
