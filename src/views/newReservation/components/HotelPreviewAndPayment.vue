<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import ReservationStepsActions from '@/components/ReservationStepsActions';
import HotelReservationPreview from '@/components/HotelReservationPreview';
import PaymentForm from './PaymentForm';

export default {
  name: 'HotelPreviewAndPayment',
  components: {
    PaymentForm,
    HotelReservationPreview,
    ReservationStepsActions,
  },
  data() {
    return {
      formData: {},
    };
  },
  computed: {
    ...mapState(['reservationInformation']),
  },
  methods: {
    ...mapMutations(['goToPreviousStep']),
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

        this.submitHotelReservation(params);
      }
    },
    setTotalPrice(newTotalPrice) {
      this.formData.price = newTotalPrice;
    },
    setCouponCode(newCoupon) {
      this.formData.coupon_code = newCoupon.code;
    },
  },
};
</script>

<template>
  <div>
    <v-row>
      <v-col cols="7">
        <payment-form
          ref="paymentForm"
          :form-data="formData"
        />
      </v-col>

      <v-col cols="5">
        <hotel-reservation-preview
          @totalPrice="setTotalPrice"
          @coupon="setCouponCode"
        />
      </v-col>
    </v-row>

    <reservation-steps-actions
      class="pt-6"
      @nextStep="submit"
      @previousStep="goToPreviousStep"
    />
  </div>
</template>
