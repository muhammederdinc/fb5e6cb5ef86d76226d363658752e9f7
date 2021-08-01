<script>
import { mapState } from 'vuex';

export default {
  name: 'ReservationSteps',
  computed: {
    ...mapState(['reservationStep']),
  },
};
</script>

<template>
  <v-stepper
    v-model="reservationStep"
    outlined
  >
    <v-stepper-header>
      <v-stepper-step
        :complete="reservationStep > 1"
        step="1"
      >
        Otel Ve Tarih Seçimi
      </v-stepper-step>

      <v-divider />

      <v-stepper-step
        :complete="reservationStep > 2"
        step="2"
      >
        Otel Tipi Ve Manzara Seçimi
      </v-stepper-step>

      <v-divider />

      <v-stepper-step step="3">
        Önizleme Ve Ödeme İşlemleri
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>
