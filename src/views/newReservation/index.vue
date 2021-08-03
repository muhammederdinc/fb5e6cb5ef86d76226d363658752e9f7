<script>
import { mapActions, mapState } from 'vuex';
import StepProgressBar from '@/components/StepProgressBar';
import HotelDateSelection from './components/HotelDateSelection';
import HotelPreviewAndPayment from './components/HotelPreviewAndPayment';
import HotelRoomAndViewSelection from './components/HotelRoomAndViewSelection';

export default {
  name: 'NewReservation',
  components: {
    StepProgressBar,
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
    <step-progress-bar
      class="mb-5"
    />

    <hotel-date-selection
      v-if="reservationStep == 1"
    />

    <hotel-room-and-view-selection
      v-if="reservationStep == 2"
    />

    <hotel-preview-and-payment
      v-if="reservationStep == 3"
    />
  </div>
</template>
