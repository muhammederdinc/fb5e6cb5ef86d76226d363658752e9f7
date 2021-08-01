<script>
export default {
  name: 'HotelDatePreview',
  props: {
    reservation: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <v-card
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
</template>
