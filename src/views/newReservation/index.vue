<script>
import { mapActions, mapState } from 'vuex';
import ReservationSteps from '@/components/ReservationSteps';
import HotelDateSelection from './components/HotelDateSelection';
import HotelRoomAndViewSelection from './components/HotelRoomAndViewSelection';
import HotelPreviewAndPayment from './components/HotelPreviewAndPayment';

export default {
  name: 'NewReservation',
  components: {
    ReservationSteps,
    HotelDateSelection,
    HotelPreviewAndPayment,
    HotelRoomAndViewSelection,
  },
  computed: {
    ...mapState(['reservationStep']),
  },
  mounted() {
    this.fetchHotelList();
    this.fetchHotelDetailList();
  },
  methods: {
    ...mapActions(['fetchHotelList', 'fetchHotelDetailList']),
  },
};
</script>

<template>
  <div class="mx-16">
    <reservation-steps class="mb-5" />

    <hotel-date-selection v-if="reservationStep == 1" />

    <hotel-room-and-view-selection v-if="reservationStep == 2" />

    <hotel-preview-and-payment v-if="reservationStep == 3" />
  </div>
</template>
