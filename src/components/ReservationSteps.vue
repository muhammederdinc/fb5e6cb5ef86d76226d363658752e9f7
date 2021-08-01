<script>
export default {
  name: 'ReservationSteps',
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step
        :complete="step > 1"
        step="1"
      >
        Otel Ve Tarih Seçimi
      </v-stepper-step>

      <v-divider />

      <v-stepper-step
        :complete="step > 2"
        step="2"
      >
        Otel Tipi Ve Manzara Seçimi
      </v-stepper-step>

      <v-divider />

      <v-stepper-step step="3">
        Önizleme Ve Ödeme İşlemleri
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <slot name="step1">
          Step 1
        </slot>
      </v-stepper-content>

      <v-stepper-content step="2">
        <slot name="step3">
          Step 2
        </slot>
      </v-stepper-content>

      <v-stepper-content step="3">
        <slot name="step2">
          Step 3
        </slot>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
