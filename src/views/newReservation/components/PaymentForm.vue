<script>
import CreditCardForm from '@/components/CreditCard';

export default {
  name: 'PaymentForm',
  components: {
    CreditCardForm,
  },
  data() {
    return {
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    };
  },
};
</script>

<template>
  <div>
    <v-card outlined>
      <v-card-title primary-title>
        Kredi Kartı Bilgileri
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12">
            <credit-card-form />
          </v-col>

          <v-col cols="12">
            <v-text-field
              dense
              outlined
              label="Kartın Üzerindeki İsmi Giriniz"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              dense
              outlined
              label="Kart Numarasını Giriniz"
            />
          </v-col>

          <v-col cols="4">
            <v-autocomplete
              :items="months"
              outlined
              dense
              label="Son Kullanma Tarihi (Ay)"
            />
          </v-col>

          <v-col cols="4">
            <v-autocomplete
              :items="years"
              outlined
              dense
              label="Son Kullanma Tarihi (Yıl)"
            />
          </v-col>

          <v-col cols="4">
            <v-text-field
              dense
              outlined
              label="CCV"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
