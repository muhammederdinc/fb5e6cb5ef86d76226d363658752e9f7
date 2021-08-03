<script>
import { mapMutations } from 'vuex';
import AppHotelReservationPreview from '@/components/AppHotelReservationPreview';
import ReservationPreviewActions from './components/ReservationPreviewActions';

export default {
  name: 'ReservationPreview',
  components: {
    ReservationPreviewActions,
    AppHotelReservationPreview,
  },
  methods: {
    ...mapMutations(['clearReservation', 'setReservationStep']),
    createReservation() {
      this.clearReservation();
      this.$router.push('/new-reservation');
    },
    updateReservation() {
      this.setReservationStep(1);
      this.$router.push('/new-reservation');
    },
  },
};
</script>

<template>
  <div>
    <reservation-preview-actions
      class="mx-16"
      @newReservation="createReservation"
      @updateReservation="updateReservation"
    />

    <app-hotel-reservation-preview
      class="mx-16"
      preview
    />
  </div>
</template>
