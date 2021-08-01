<script>
import ReservationStepsActions from '@/components/ReservationStepsActions';
import { mapState } from 'vuex';

export default {
  name: 'HotelRoomAndViewSelection',
  components: {
    ReservationStepsActions,
  },
  computed: {
    ...mapState(['reservationInformation']),
    reservation() {
      const {
        start_date: startDate = null,
        end_date: endDate = null,
        adult = null,
        child = null,
        hotel = null,
        city = null,
      } = this.reservationInformation;

      return {
        adult,
        endDate,
        startDate,
        child: child || 0,
        hotel: `${hotel.hotel_name} (${city})`,
      };
    },
  },
  methods: {
    saveAndContinue() {
      // this.getHotelNameById();
    },
  },
};
</script>

<template>
  <div>
    <v-card v-if="reservationInformation.hotel" outlined color="grey lighten-3">
      <v-card-title
        primary-title
      >
        {{ reservation.hotel }}
      </v-card-title>

      <v-card-text>
        <v-row class="d-flex">
          <v-col class="d-flex" cols="auto">
            <h4>Giriş Tarihi:</h4> {{ reservation.startDate }}
          </v-col>

          <v-col class="d-flex" cols="auto">
            <h4>Çıkış Tarihi:</h4> {{ reservation.endDate }}
          </v-col>

          <v-col class="d-flex" cols="auto">
            <h4>Yetişkin:</h4> {{ reservation.adult }}
          </v-col>

          <v-col class="d-flex" cols="auto">
            <h4>Çocuk:</h4> {{ reservation.child }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col cols="12">
        Oda Tipi Seçimi
        <v-divider />
      </v-col>
    </v-row>

    <reservation-steps-actions
      class="pt-6"
      @nextStep="saveAndContinue"
    />
  </div>
</template>
