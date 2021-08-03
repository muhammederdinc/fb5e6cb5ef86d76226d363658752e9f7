<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import DatePicker from '@/components/DatePicker';
import StepProgressBarActions from '@/components/StepProgressBarActions';

export default {
  name: 'HotelDateSelection',
  components: {
    DatePicker,
    StepProgressBarActions,
  },
  data() {
    return {
      formData: {
        adult: null,
        child: null,
      },
      maxAdultSize: 5,
      childStatus: true,
      adultRules: [
        (v) => (v <= this.maxAdultSize) || 'Yetişkin Ziyaretçi Sayısı Aşıldı',
        (v) => !!v || 'Yetişkin Ziyaretçi Sayısı Girilmelidir',
      ],
      childRules: [
        (v) => (v <= 5) || 'Çocuk Ziyaretçi Sayısı Aşıldı',
      ],
      hotelRules: [
        (v) => !!v || 'Otel Seçimi Yapılmalıdır',
      ],
      dateRules: [
        (v) => !!v || 'Tarih Bilgisi Girilmelidir',
      ],
    };
  },
  computed: {
    ...mapState(['hotelList', 'hotelDetailList', 'reservationInformation']),
    ...mapGetters(['getHotelDetailById']),
    adultTextFieldLabel() {
      return `Yetişkin Sayısı (Limit: ${this.maxAdultSize})`;
    },
    childTextFieldLabel() {
      return `${!this.childStatus ? 'Çocuk Ziyaretçi Kabul Edilmiyor' : 'Çocuk Sayısı (Limit: 5)'}`;
    },
  },
  created() {
    if (this.reservationInformation.hotel) {
      this.formData = this.reservationInformation;
    }
  },
  methods: {
    ...mapMutations(['goToNextStep']),

    handleHotelChange({ id }) {
      const {
        city,
        child_status: childStatus,
        max_adult_size: maxAdultSize,
      } = this.getHotelDetailById(id);

      if (!childStatus) {
        this.formData.child = null;
      }

      this.formData.city = city;
      this.childStatus = childStatus;
      this.maxAdultSize = maxAdultSize;
    },
    saveAndContinue() {
      const isDataValid = this.$refs.form.validate();

      if (isDataValid) this.goToNextStep(this.formData);
    },
  },
};
</script>

<template>
  <div>
    <v-card outlined>
      <v-form
        ref="form"
        lazy-validation
      >
        <v-row class="pa-10">
          <v-col cols="12">
            <v-autocomplete
              v-model="formData.hotel"
              :items="hotelList"
              :rules="hotelRules"
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
                  :selected="formData.start_date"
                  :rules="dateRules"
                  label="Giriş Tarihi"
                />
              </v-col>

              <v-col cols="3">
                <date-picker
                  v-model="formData.end_date"
                  :selected="formData.end_date"
                  :rules="dateRules"
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

    <step-progress-bar-actions
      class="pt-6"
      @nextStep="saveAndContinue"
    />
  </div>
</template>
