<script>
import { mapActions, mapState } from 'vuex';
import AppStepProgressBar from '@/components/AppStepProgressBar';
import NewReservationStepOne from './components/NewReservationStepOne';
import NewReservationStepThree from './components/NewReservationStepThree';
import NewReservationStepTwo from './components/NewReservationStepTwo';

export default {
  name: 'NewReservation',
  components: {
    AppStepProgressBar,
    NewReservationStepOne,
    NewReservationStepTwo,
    NewReservationStepThree,
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
    <app-step-progress-bar
      class="mb-5"
    />

    <new-reservation-step-one
      v-if="reservationStep == 1"
    />

    <new-reservation-step-two
      v-if="reservationStep == 2"
    />

    <new-reservation-step-three
      v-if="reservationStep == 3"
    />
  </div>
</template>
