<script>
import { mapActions } from 'vuex';
import ReservationSteps from '@/components/ReservationSteps';
import HotelDateSelection from './components/HotelDateSelection';

export default {
  name: 'NewReservation',
  components: {
    ReservationSteps,
    HotelDateSelection,
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
    <template v-slot:step1>
      <hotel-date-selection />
    </template>

    <template v-slot:step2>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:step3>
      <h1>Here might be a page title</h1>
    </template>
  </reservation-steps>
</template>
