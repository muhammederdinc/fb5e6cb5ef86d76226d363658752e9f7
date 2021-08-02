<script>
import HotelReservationPreview from '@/components/HotelReservationPreview';
import ReservationPreviewActions from './components/ReservationPreviewActions';

export default {
  name: 'reservationPreview',
  components: {
    HotelReservationPreview,
    ReservationPreviewActions,
  },
};
</script>

<template>
  <div>
    <reservation-preview-actions
      class="mx-16"
    />

    <hotel-reservation-preview
      class="mx-16"
      preview
    />
  </div>
</template>
