<script>
import { mapState } from 'vuex';
import DatePicker from '../../../components/DatePicker';

export default {
  name: 'HotelDateSelection',
  components: {
    DatePicker,
  },
  data() {
    return {
      formData: {},
    };
  },
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
          v-model="formData.hotelName"
          :items="hotelList"
          outlined
          clearable
          dense flat
          return-object
          item-value="id"
          item-text="hotel_name"
          prepend-icon="mdi-city"
          label="Rezervasyon Yapmak İstediğiniz Oteli Seçiniz"
        />
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="3">
            <date-picker
              v-model="formData.start_date"
              label="Giriş Tarihi"
            />
          </v-col>

          <v-col cols="3">
            <date-picker
              v-model="formData.end_date"
              label="Çıkış Tarihi"
            />
          </v-col>

          <v-col cols="3">
            <v-text-field
              outlined
              dense
              type="number"
              label="Yetişkin Sayısı"
            />
          </v-col>

          <v-col cols="3">
            <v-text-field
              outlined
              dense
              type="number"
              label="Çocuk Sayısı"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
