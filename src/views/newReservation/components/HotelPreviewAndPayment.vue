<script>
import { mapMutations } from 'vuex';
import ReservationStepsActions from '@/components/ReservationStepsActions';
import HotelReservationPreview from '@/components/HotelReservationPreview';

export default {
  name: 'HotelPreviewAndPayment',
  components: {
    HotelReservationPreview,
    ReservationStepsActions,
  },
  methods: {
    ...mapMutations(['goToPreviousStep']),
  },
};
</script>

<template>
  <div>
    <v-row>
      <v-col cols="7">
        Test
      </v-col>

      <v-col cols="5">
        <hotel-reservation-preview />
      </v-col>
    </v-row>

    <reservation-steps-actions
      class="pt-6"
      @previousStep="goToPreviousStep"
    />
  </div>
</template>
