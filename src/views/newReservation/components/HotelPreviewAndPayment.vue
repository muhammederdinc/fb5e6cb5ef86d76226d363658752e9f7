<script>
import { mapMutations } from 'vuex';
import ReservationStepsActions from '@/components/ReservationStepsActions';

export default {
  name: 'HotelPreviewAndPayment',
  components: {
    ReservationStepsActions,
  },
  methods: {
    ...mapMutations(['goToPreviousStep']),
  },
};
</script>

<template>
  <div>
    Test

    <reservation-steps-actions
      class="pt-6"
      @previousStep="goToPreviousStep"
    />
  </div>
</template>
