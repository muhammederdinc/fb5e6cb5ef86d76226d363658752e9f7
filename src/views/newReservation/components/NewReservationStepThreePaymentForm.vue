<script>
export default {
  name: 'NewReservationStepThreePaymentForm',
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
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
      <v-card-title primary-title>
        Kredi Kartı Bilgileri

        <v-spacer />

        <v-switch
          color="success"
          label="Kart Bilgilerimi Kaydet"
          @change="emitUserCardPreference"
        />
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-row>
            <v-col cols="12">
              Card
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

            <v-col cols="4">
              <v-autocomplete
                v-model="formData.card_date_month"
                :items="months"
                :rules="requiredFieldRules"
                outlined
                dense
                label="Son Kullanma Tarihi (Ay)"
              />
            </v-col>

            <v-col cols="4">
              <v-autocomplete
                v-model="formData.card_date_year"
                :items="years"
                :rules="requiredFieldRules"
                outlined
                dense
                label="Son Kullanma Tarihi (Yıl)"
              />
            </v-col>

            <v-col cols="4">
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
