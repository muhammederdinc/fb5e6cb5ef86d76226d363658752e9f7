<script>
import { mapState } from 'vuex';

export default {
  name: 'ReservationStepsActions',
  computed: {
    ...mapState(['reservationStep']),
  },
};
</script>

<template>
  <v-row justify="space-between">
    <v-col cols="auto">
      <v-btn
        v-if="reservationStep > 1"
        color="primary"
        @click="$('previousStep')"
      >
        Geri
      </v-btn>
    </v-col>

    <v-col cols="auto">
      <v-btn
        color="primary"
        @click="$emit('nextStep')"
      >
        Kaydet Ve Devam Et
      </v-btn>
    </v-col>
  </v-row>
</template>
