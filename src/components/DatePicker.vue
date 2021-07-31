<script>
export default {
  name: 'DatePicker',
  props: {
    label: {
      type: String,
      default: 'Tarih',
    },
  },
  data: () => ({
    date: null,
    isMenuVisible: false,
  }),
  methods: {
    handleDateChange(value) {
      this.isMenuVisible = false;

      this.$emit('input', value);
    },
  },
};
</script>

<template>
  <v-menu
    v-model="isMenuVisible"
    :nudge-right="20"
    :nudge-top="20"
    :close-on-content-click="false"
    offset-y
    min-width="auto"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-bind="$attrs"
        v-model="date"
        v-on="on"
        :label="label"
        dense
        readonly
        outlined
        append-icon="mdi-calendar"
      />
    </template>

    <v-date-picker
      v-model="date"
      @input="handleDateChange"
    />
  </v-menu>
</template>
