<script>
export default {
  name: 'ReservationPreviewActions',
};
</script>

<template>
  <v-card
    class="text-center pa-8 mb-4"
    outlined
  >
    <v-card-title
      class="d-flex justify-center"
      primary-title
    >
      <v-icon
        v-text="'mdi-calendar-check'"
        color="success"
        size="60"
      />
    </v-card-title>

    <v-card-subtitle
      v-text="'Rezervasyon kaydınız alınmıştır.'"
      class="subtitle-1 font-weight-black"
    />

    <v-card-text class="subtitle-2">
      Rezervasyon kaydınız aşağıdaki gibidir. Rezervasyon kaydınızda değişiklik veya
      yeni rezervasyon yapmak için aşağıdaki linkleri kullanabilirsiniz.
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        v-text="'Yeni Rezervasyon Yap'"
        color="primary"
      />

      <v-btn
        v-text="'Rezervasyonu Güncelle'"
        color="primary"
      />

      <v-btn
        v-text="'Rezervasyonu İptal Et'"
        color="primary"
      />
    </v-card-actions>
  </v-card>
</template>
