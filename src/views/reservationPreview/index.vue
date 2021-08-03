<script>
import { mapMutations } from 'vuex';
import HotelReservationPreview from '@/components/HotelReservationPreview';
import ReservationPreviewActions from './components/ReservationPreviewActions';

export default {
  name: 'ReservationPreview',
  components: {
    HotelReservationPreview,
    ReservationPreviewActions,
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

    <hotel-reservation-preview
      class="mx-16"
      preview
    />
  </div>
</template>
