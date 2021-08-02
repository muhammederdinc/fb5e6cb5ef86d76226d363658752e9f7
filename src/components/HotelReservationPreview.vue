<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HotelReservationPreview',
  props: {
    preview: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      discountCode: '',
      coupon: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['reservationInformation']),
    title() {
      const { hotel, city } = this.reservationInformation;

      return `${hotel.hotel_name} (${city})`;
    },
    accommodationPrice() {
      const { room } = this.reservationInformation;
      const dayCount = this.durationOfStay;

      return room.price * dayCount;
    },
    totalPrice() {
      const { roomScenic } = this.reservationInformation;
      const additionalPrice = (this.accommodationPrice * roomScenic.price_rate) / 100;
      const discount = this.coupon ? this.coupon.discount_ammount : 0;
      const result = this.accommodationPrice + additionalPrice - discount;

      this.$emit('totalPrice', result);

      return result;
    },
    durationOfStay() {
      const { start_date: startDate, end_date: endDate } = this.reservationInformation;

      return this.getNumberOfDays(startDate, endDate);
    },
  },
  methods: {
    ...mapActions(['checkCoupon']),
    getNumberOfDays(start, end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const oneDay = 1000 * 60 * 60 * 24;
      const diffInTime = endDate.getTime() - startDate.getTime();
      const diffInDays = Math.round(diffInTime / oneDay);

      return diffInDays;
    },
    checkCouponByDiscountCode() {
      this.isLoading = true;

      this.checkCoupon(this.discountCode)
        .then(([data]) => {
          this.coupon = null;

          if (data && data.id) {
            const couponExpirationDate = new Date(data.expiration_at);
            const currentDate = new Date();

            if (currentDate.getTime() < couponExpirationDate.getTime()) {
              this.coupon = data;

              this.$emit('coupon', this.coupon);
            }
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<template>
  <v-card outlined>
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-text class="ma-1 text-center">
      <v-row>
        <v-col cols="6">
          <v-card class="pa-2" outlined>
            <h3>Giriş Tarihi:</h3>
            <span>{{ reservationInformation.start_date }}</span>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="pa-2" outlined>
            <h3>Çıkış Tarihi:</h3>
            <span>{{ reservationInformation.end_date }}</span>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="pa-2" outlined>
            <h3>Yetişkin:</h3>
            <span>{{ reservationInformation.adult }}</span>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="pa-2" outlined>
            <h3>Çocuk:</h3>
            <span>{{ reservationInformation.child || 0 }}</span>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="pa-2" outlined>
            <h3>Oda Tipi:</h3>
            <span>{{ reservationInformation.room.title }}</span>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="pa-2" outlined>
            <h3>Manzara:</h3>
            <span>{{ reservationInformation.roomScenic.title }}</span>
          </v-card>
        </v-col>

        <v-col
          v-if="!preview"
          cols="12"
        >
          <v-card class="d-flex" outlined>
            <v-text-field
              v-model="discountCode"
              label="Kupon Kodu"
              class="ma-3"
              hide-details
              outlined
              dense
            />

            <v-btn
              depressed
              class="ma-3"
              color="primary"
              :loading="isLoading"
              :disabled="discountCode.length < 1"
              @click="checkCouponByDiscountCode"
            >
              Kodu Kullan
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card class="d-flex pa-3" outlined>
            <v-row>
              <v-col class="text-start" cols="6">
                Oda Fiyatı:
              </v-col>

              <v-col class="text-end" cols="6">
                {{ reservationInformation.room.price }} TL
              </v-col>

              <v-col class="text-start" cols="6">
                Fiyat Etki Oranı:
              </v-col>

              <v-col class="text-end" cols="6">
                {{ `%${reservationInformation.roomScenic.price_rate}` }}
              </v-col>

              <v-col class="text-start" cols="6">
                {{ `Konaklama (${durationOfStay} Gün)` }}
              </v-col>

              <v-col class="text-end" cols="6">
                {{ accommodationPrice }} TL
              </v-col>

              <template v-if="coupon">
                <v-col class="text-start" cols="6">
                  {{ `İndirim (${coupon.code})` }}
                </v-col>

                <v-col class="text-end" cols="6">
                  {{ `-${coupon.discount_ammount} TL` }}
                </v-col>
              </template>

              <v-col class="text-center" cols="12">
                <v-divider class="mb-2" />

                <h2 class="py-2">
                  Toplam Tutar
                </h2>

                <h1 class="py-2">
                  {{ `${totalPrice} TL` }}
                </h1>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
