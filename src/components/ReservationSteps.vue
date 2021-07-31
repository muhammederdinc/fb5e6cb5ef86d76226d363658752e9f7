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
        <slot name="step1">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          />
        </slot>

        <v-btn
          color="primary"
          @click="step = 2"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <slot name="step2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          />
        </slot>

        <v-btn
          color="primary"
          @click="step = 3"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <slot name="step3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          />
        </slot>

        <v-btn
          color="primary"
          @click="step = 1"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
