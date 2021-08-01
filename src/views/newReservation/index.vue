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
  <reservation-steps>
    <template v-if="reservationStep === 1" v-slot:step1>
      <hotel-date-selection />
    </template>

    <template v-if="reservationStep === 2" v-slot:step2>
      <hotel-room-and-view-selection />
    </template>

    <template v-if="reservationStep === 3" v-slot:step3>
      <h1>Here might be a page title</h1>
    </template>
  </reservation-steps>
</template>
