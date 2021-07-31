<script>
import { mapState } from 'vuex';

export default {
  name: 'HotelDateSelection',
  computed: {
    ...mapState(['hotelList']),
  },
};
</script>

<template>
  <v-card outlined>
    <v-row class="pa-10">
      <v-col cols="12">
        <v-autocomplete
          :items="hotelList"
          outlined
          clearable
          dense flat
          item-value="id"
          item-text="hotel_name"
          prepend-icon="mdi-city"
          label="Rezervasyon Yapmak İstediğiniz Oteli Seçiniz"
        />
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="3">
            1
          </v-col>

          <v-col cols="3">
            1
          </v-col>

          <v-col cols="3">
            1
          </v-col>

          <v-col cols="3">
            1
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
