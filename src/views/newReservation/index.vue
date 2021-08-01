<script>
import { mapActions, mapState } from 'vuex';
import ReservationSteps from '@/components/ReservationSteps';
import HotelDateSelection from './components/HotelDateSelection';
import HotelRoomAndViewSelection from './components/HotelRoomAndViewSelection';

export default {
  name: 'NewReservation',
  components: {
    ReservationSteps,
    HotelDateSelection,
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
  </div>
</template>
