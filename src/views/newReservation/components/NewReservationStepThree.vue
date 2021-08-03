<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import StepProgressBarActions from '@/components/StepProgressBarActions';
import HotelReservationPreview from '@/components/HotelReservationPreview';
import NewReservationStepThreePaymentForm from './NewReservationStepThreePaymentForm';

export default {
  name: 'NewReservationStepThree',
  components: {
    StepProgressBarActions,
    HotelReservationPreview,
    NewReservationStepThreePaymentForm,
  },
  data() {
    return {
      formData: {},
      isSaveCardInfo: false,
    };
  },
  computed: {
    ...mapState(['reservationInformation', 'creditCard']),
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
        const params = {
          ...otherParams,
          ...this.formData,
          hotel_id: this.reservationInformation.hotel.id,
          room_type: this.reservationInformation.room.id,
          room_scenic: this.reservationInformation.roomScenic.id,
        };

        if (this.isSaveCardInfo) this.updateReservationInformation();

        this.submitHotelReservation(params)
          .then(() => {
            const reservationParams = { price: this.formData.price };

            this.goToNextStep(reservationParams);
            this.$router.push('/reservation-preview');
          });
      }
    },
    setTotalPrice(newTotalPrice) {
      this.formData.price = newTotalPrice;
    },
    setCouponCode(newCoupon) {
      this.formData.coupon_code = newCoupon.code;
    },
    updateReservationInformation() {
      const { coupon_code: couponCode, price, ...cardParams } = this.formData;

      this.setCreditCard(cardParams);
    },
    setIsSaveCardInfo(isSaveCardInfo) {
      this.isSaveCardInfo = isSaveCardInfo;
    },
  },
};
</script>

<template>
  <div>
    <v-row>
      <v-col cols="7">
        <new-reservation-step-three-payment-form
          ref="paymentForm"
          :form-data="formData"
          @changeUserCardPreference="setIsSaveCardInfo"
        />
      </v-col>

      <v-col cols="5">
        <hotel-reservation-preview
          @totalPrice="setTotalPrice"
          @coupon="setCouponCode"
        />
      </v-col>
    </v-row>

    <step-progress-bar-actions
      class="pt-6"
      @nextStep="submit"
      @previousStep="goToPreviousStep"
    />
  </div>
</template>
