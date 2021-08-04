<script>
import {
  mapState,
  mapActions,
  mapGetters,
  mapMutations,
} from 'vuex';
import snackbarMixin from '@/mixins/snackbar';

export default {
  name: 'AppHotelReservationPreview',
  mixins: [snackbarMixin],
  props: {
    preview: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      discountCode: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['reservationInformation', 'definedCoupon']),
    ...mapGetters(['durationOfStay']),
    title() {
      const { hotel, city } = this.reservationInformation;

      return `${hotel.hotel_name} (${city})`;
    },
    accommodationPrice() {
      const { room, adult, child } = this.reservationInformation;

      return room.price * this.durationOfStay * (adult + child);
    },
    totalPrice() {
      const { price } = this.reservationInformation;
      const discount = this.definedCoupon && !this.preview
        ? this.definedCoupon.discount_ammount : 0;
      const result = price - discount;

      this.$emit('totalPrice', result);

      return result;
    },
  },
  created() {
    if (this.definedCoupon) this.discountCode = this.definedCoupon.code;
  },
  methods: {
    ...mapActions(['checkCoupon']),
    ...mapMutations(['setDefinedCoupon']),
    checkCouponByDiscountCode() {
      this.isLoading = true;

      this.checkCoupon(this.discountCode)
        .then(([data]) => {
          this.setDefinedCoupon(null);

          if (data && data.id) {
            const couponExpirationDate = new Date(data.expiration_at);
            const currentDate = new Date();

            if (currentDate.getTime() < couponExpirationDate.getTime()) {
              this.$emit('coupon', data);
              this.setDefinedCoupon(data);
              this.showSnackbar('Kupon Başarıyla Tanımlandı', 'success');
            } else {
              this.showSnackbar('Girilen Kupon Kodunun Süresi Dolmuştur. Lütfen Farklı Bir Kupon Kodu İle Devam Ediniz', 'info');
            }
          } else {
            this.showSnackbar('Girilen Kupon Kodu Hatalıdır', 'info');
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
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <v-card class="pa-2" outlined>
            <h3>Giriş Tarihi:</h3>
            <span>{{ reservationInformation.start_date }}</span>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <v-card class="pa-2" outlined>
            <h3>Çıkış Tarihi:</h3>
            <span>{{ reservationInformation.end_date }}</span>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <v-card class="pa-2" outlined>
            <h3>Yetişkin:</h3>
            <span>{{ reservationInformation.adult }}</span>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <v-card class="pa-2" outlined>
            <h3>Çocuk:</h3>
            <span>{{ reservationInformation.child || 0 }}</span>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <v-card class="pa-2" outlined>
            <h3>Oda Tipi:</h3>
            <span>{{ reservationInformation.room.title }}</span>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
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
              :disabled="discountCode && discountCode.length < 1"
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
                {{ reservationInformation.room.price | currency }}
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
                {{ accommodationPrice | currency }}
              </v-col>

              <template v-if="definedCoupon">
                <v-col class="text-start" cols="6">
                  {{ `İndirim (${definedCoupon.code})` }}
                </v-col>

                <v-col class="text-end" cols="6">
                  - {{ definedCoupon.discount_ammount | currency }}
                </v-col>
              </template>

              <v-col class="text-center" cols="12">
                <v-divider class="mb-2" />

                <h2 class="py-2">
                  Toplam Tutar
                </h2>

                <h1 class="py-2">
                  {{ totalPrice | currency }}
                </h1>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
