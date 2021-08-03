<script>
import AppCreditCard from '@/components/AppCreditCard';

export default {
  name: 'NewReservationStepThreePaymentForm',
  components: {
    AppCreditCard,
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      years: [2022, 2023, 2024, 2025, 2026, 2027, 2028],
      requiredFieldRules: [
        (v) => !!v || 'Bu alanın doldurulması zorunludur',
      ],
      cardNumberRules: [
        (v) => !!v || 'Bu alanın doldurulması zorunludur',
        (v) => (v && v.length === 16) || 'Kredi Kartı Numarası 16 Haneli Olmalıdır',
      ],
      ccvRules: [
        (v) => !!v || 'Bu alanın doldurulması zorunludur',
        (v) => (v && v.length === 3) || 'CCV 3 Haneli Olmalıdır',
      ],
    };
  },
  computed: {
    creditCardDate() {
      const { card_date_month: month, card_date_year: year } = this.formData;

      return `${month}/${year}`;
    },
  },
  methods: {
    emitUserCardPreference(newUserCardPreference) {
      this.$emit('changeUserCardPreference', newUserCardPreference);
    },
  },
};
</script>

<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-row>
            <v-col cols="12">
              <app-credit-card
                :number="formData.card_number"
                :name="formData.card_name"
                :cvv="formData.card_cvv"
                :date="creditCardDate"
              />
            </v-col>

            <v-col class="d-flex justify-end" cols="12">
              <v-switch
                color="success"
                label="Kart Bilgilerimi Kaydet"
                dense
                hide-details
                class="ma-0 pa-0"
                @change="emitUserCardPreference"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="formData.card_name"
                dense
                outlined
                :rules="requiredFieldRules"
                label="Kartın Üzerindeki İsmi Giriniz"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="formData.card_number"
                dense
                outlined
                type="number"
                :rules="cardNumberRules"
                label="Kart Numarasını Giriniz"
              />
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-autocomplete
                v-model="formData.card_date_month"
                :items="months"
                :rules="requiredFieldRules"
                outlined
                dense
                label="Son Kullanma Tarihi (Ay)"
              />
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-autocomplete
                v-model="formData.card_date_year"
                :items="years"
                :rules="requiredFieldRules"
                outlined
                dense
                label="Son Kullanma Tarihi (Yıl)"
              />
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4">
              <v-text-field
                v-model="formData.card_cvv"
                :rules="ccvRules"
                dense
                outlined
                type="number"
                label="CCV"
                return-masked-value
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
