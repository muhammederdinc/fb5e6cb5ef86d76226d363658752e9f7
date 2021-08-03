<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import snackbarMixin from '@/mixins/snackbar';
import AppStepProgressBarActions from '@/components/AppStepProgressBarActions';
import AppHotelReservationPreview from '@/components/AppHotelReservationPreview';
import NewReservationStepThreePaymentForm from './NewReservationStepThreePaymentForm';

export default {
  name: 'NewReservationStepThree',
  components: {
    AppStepProgressBarActions,
    AppHotelReservationPreview,
    NewReservationStepThreePaymentForm,
  },
  mixins: [snackbarMixin],
  data() {
    return {
      formData: {},
      isSaveCardInfo: false,
    };
  },
  computed: {
    ...mapState(['reservationInformation', 'creditCard']),
    reservationPrice() {
      const { price } = this.formData;

      return { price };
    },
  },
  created() {
    if (this.creditCard.card_number) this.formData = this.creditCard;
  },
  methods: {
    ...mapMutations(['goToPreviousStep', 'goToNextStep', 'setCreditCard']),
    ...mapActions(['submitHotelReservation']),
    submit() {
      const isDataValid = this.$refs.paymentForm.$refs.form.validate();
      const {
        hotel,
        room,
        roomScenic,
        city,
        ...otherParams
      } = this.reservationInformation;

      if (isDataValid) {
        const params = this.getCreateReservationParams(otherParams);

        this.saveCreditCard();

        this.submitHotelReservation(params)
          .then(() => {
            this.goToNextStep(this.reservationPrice);
            this.$router.push('/reservation-preview');
            this.showSnackbar('Ödeme İşleminiz Başarıyla Gerçekleştirildi', 'success');
          });
      }
    },
    saveCreditCard() {
      if (this.isSaveCardInfo) {
        const { coupon_code: couponCode, price, ...cardParams } = this.formData;

        this.setCreditCard(cardParams);
      }
    },
    setTotalPrice(newTotalPrice) {
      this.formData.price = newTotalPrice;
    },
    setCouponCode(newCoupon) {
      this.formData.coupon_code = newCoupon.code;
    },
    setUserCardPreference(isSaveCardInfo) {
      this.isSaveCardInfo = isSaveCardInfo;
    },
    getCreateReservationParams(otherParams) {
      return {
        ...otherParams,
        ...this.formData,
        hotel_id: this.reservationInformation.hotel.id,
        room_type: this.reservationInformation.room.id,
        room_scenic: this.reservationInformation.roomScenic.id,
      };
    },
  },
};
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="7" lg="7">
        <new-reservation-step-three-payment-form
          ref="paymentForm"
          :form-data="formData"
          @changeUserCardPreference="setUserCardPreference"
        />
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="5" lg="5">
        <app-hotel-reservation-preview
          @totalPrice="setTotalPrice"
          @coupon="setCouponCode"
        />
      </v-col>
    </v-row>

    <app-step-progress-bar-actions
      class="pt-6"
      @nextStep="submit"
      @previousStep="goToPreviousStep"
    />
  </div>
</template>
