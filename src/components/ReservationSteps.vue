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
        Name of step 1
      </v-stepper-step>

      <v-divider />

      <v-stepper-step
        :complete="step > 2"
        step="2"
      >
        Name of step 2
      </v-stepper-step>

      <v-divider />

      <v-stepper-step step="3">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          min-height="100"
          flat
        >
          <slot name="step1">
            Step 1
          </slot>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          min-height="100"
          flat
        >
          <slot name="step3">
            Step 2
          </slot>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          min-height="100"
          flat
        >
          <slot name="step2">
            Step 3
          </slot>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>

    <v-row class="pa-3" justify="space-between">
      <v-col cols="auto">
        <v-btn
          v-if="step > 1"
          color="primary"
          @click="step--"
        >
          Geri
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          color="primary"
          @click="step++"
        >
          Kaydet Ve Devam Et
        </v-btn>
      </v-col>
    </v-row>
  </v-stepper>
</template>
