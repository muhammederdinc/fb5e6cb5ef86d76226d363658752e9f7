<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import AppDatePicker from '@/components/AppDatePicker';
import AppStepProgressBarActions from '@/components/AppStepProgressBarActions';
import snackbarMixin from '@/mixins/snackbar';

export default {
  name: 'NewReservationStepOne',
  components: {
    AppDatePicker,
    AppStepProgressBarActions,
  },
  mixins: [snackbarMixin],
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
      const {
        child_status: childStatus,
        max_adult_size: maxAdultSize,
      } = this.getHotelDetailById(this.reservationInformation.hotel.id);

      this.childStatus = childStatus;
      this.maxAdultSize = maxAdultSize;
      this.formData = this.reservationInformation;
    }
  },
  methods: {
    ...mapMutations(['goToNextStep']),
    handleHotelChange(selectedHotel) {
      if (selectedHotel) {
        const {
          city,
          child_status: childStatus,
          max_adult_size: maxAdultSize,
        } = this.getHotelDetailById(selectedHotel.id);

        if (!childStatus) {
          this.formData.child = null;
        }

        this.formData.city = city;
        this.childStatus = childStatus;
        this.maxAdultSize = maxAdultSize;
      }
    },
    saveAndContinue() {
      const startDate = new Date(this.formData.start_date);
      const endDate = new Date(this.formData.end_date);

      if (startDate.getTime() < endDate.getTime()) {
        const isDataValid = this.$refs.form.validate();

        if (isDataValid) this.goToNextStep(this.formData);
      } else {
        this.showSnackbar('Lütfen Bitiş Tarihini Başlangıç Tarihinden Büyük Olacak Şekilde Giriniz', 'info');
      }
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
          <v-col class="d-flex" cols="12">
            <v-icon class="mb-6 mr-3 d-none d-sm-flex">
              mdi-city
            </v-icon>

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
              label="Rezervasyon Yapmak İstediğiniz Oteli Seçiniz"
              @change="handleHotelChange"
            />
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                <app-date-picker
                  v-model="formData.start_date"
                  :selected="formData.start_date"
                  :rules="dateRules"
                  label="Giriş Tarihi"
                />
              </v-col>

              <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                <app-date-picker
                  v-model="formData.end_date"
                  :selected="formData.end_date"
                  :rules="dateRules"
                  label="Çıkış Tarihi"
                />
              </v-col>

              <v-col cols="12" xs="12" sm="12" md="3" lg="3">
                <v-text-field
                  v-model.number="formData.adult"
                  :rules="adultRules"
                  :label="adultTextFieldLabel"
                  dense
                  outlined
                  type="number"
                />
              </v-col>

              <v-col cols="12" xs="12" sm="12" md="3" lg="3">
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

    <app-step-progress-bar-actions
      class="pt-6"
      @nextStep="saveAndContinue"
    />
  </div>
</template>
