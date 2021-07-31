<script>
import { mapGetters, mapState } from 'vuex';
import DatePicker from '@/components/DatePicker';

export default {
  name: 'HotelDateSelection',
  components: {
    DatePicker,
  },
  data() {
    return {
      formData: {},
      maxAdultSize: 5,
      childStatus: true,
      isDataValid: true,
      adultRules: [
        (v) => (v <= this.maxAdultSize) || 'Yetişkin Ziyaretçi Sayısı Aşıldı',
      ],
      childRules: [
        (v) => (v <= 5) || 'Çocuk Ziyaretçi Sayısı Aşıldı',
      ],
    };
  },
  computed: {
    ...mapState(['hotelList', 'hotelDetailList']),
    ...mapGetters(['getHotelLimitInfoById']),
    adultTextFieldLabel() {
      return `Yetişkin Sayısı (Limit: ${this.maxAdultSize})`;
    },
    childTextFieldLabel() {
      return `${!this.childStatus ? 'Çocuk Ziyaretçi Kabul Edilmiyor' : 'Çocuk Sayısı (Limit: 5)'}`;
    },
  },
  methods: {
    handleHotelChange({ id }) {
      const {
        child_status: childStatus,
        max_adult_size: maxAdultSize,
      } = this.getHotelLimitInfoById(id);

      if (!childStatus) {
        this.formData.child = null;
      }

      this.childStatus = childStatus;
      this.maxAdultSize = maxAdultSize;
    },
  },
};
</script>

<template>
  <v-card outlined>
    <v-form
      v-model="isDataValid"
      ref="form"
      lazy-validation
    >
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
            @change="handleHotelChange"
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
                v-model.number="formData.adult"
                :rules="adultRules"
                :label="adultTextFieldLabel"
                dense
                outlined
                type="number"
              />
            </v-col>

            <v-col cols="3">
              <v-text-field
                v-model.number="formData.child"
                :rules="childRules"
                :label="childTextFieldLabel"
                dense
                outlined
                type="number"
                :disabled="!childStatus"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>
