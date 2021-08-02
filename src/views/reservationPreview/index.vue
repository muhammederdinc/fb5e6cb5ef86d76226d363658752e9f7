<script>
import HotelReservationPreview from '@/components/HotelReservationPreview';
import ReservationPreviewActions from './components/ReservationPreviewActions';

export default {
  name: 'reservationPreview',
  components: {
    HotelReservationPreview,
    ReservationPreviewActions,
  },
  methods: {
    newReservation() {
      this.$router.push('/new-reservation');
    },
  },
};
</script>

<template>
  <div>
    <reservation-preview-actions
      class="mx-16"
      @newReservation="newReservation"
    />

    <hotel-reservation-preview
      class="mx-16"
      preview
    />
  </div>
</template>
