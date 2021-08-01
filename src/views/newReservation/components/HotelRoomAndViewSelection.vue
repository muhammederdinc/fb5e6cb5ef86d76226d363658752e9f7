<script>
import ReservationStepsActions from '@/components/ReservationStepsActions';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'HotelRoomAndViewSelection',
  components: {
    ReservationStepsActions,
  },
  computed: {
    ...mapState(['reservationInformation']),
    ...mapGetters(['getHotelDetailById']),
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
    <v-card
      v-if="reservationInformation.hotel"
      color="grey lighten-3"
      class="mb-5"
      outlined
    >
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

      <v-col
        v-for="room in getHotelDetailById(reservationInformation.hotel.id).room_type"
        :key="room.id"
        cols="4"
      >
        <v-card
          outlined
        >
          <v-card-title primary-title>
            {{ room.title }}
          </v-card-title>

          <v-card-text>
            <v-img
              height="200"
              :aspect-ratio="16/9"
              :src="room.photo"
            ></v-img>
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            {{ room.price }} TL
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12">

        Manzara Seçimi
        <v-divider />
      </v-col>

      <v-col
        v-for="room in getHotelDetailById(reservationInformation.hotel.id).room_scenic"
        :key="room.id"
        cols="4"
      >
        <v-card outlined>
          <v-card-title primary-title>
            {{ room.title }}
          </v-card-title>

          <v-card-text>
            <v-img
              height="200"
              :aspect-ratio="16/9"
              :src="room.photo"
            ></v-img>
          </v-card-text>

          <v-card-actions>
            Fiyat Etki Oranı

            <v-spacer />

            + {{ room.price_rate }} %
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <reservation-steps-actions
      class="pt-6"
      @nextStep="saveAndContinue"
    />
  </div>
</template>
