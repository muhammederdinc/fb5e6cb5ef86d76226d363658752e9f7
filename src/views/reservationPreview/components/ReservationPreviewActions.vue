<script>
export default {
  name: 'ReservationPreviewActions',
};
</script>

<template>
  <v-card
    class="text-center"
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

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="12" xs="12" sm="12" md="4" lg="3">
          <v-btn
            v-text="'Yeni Rezervasyon Yap'"
            color="primary"
            block
            @click="$emit('newReservation')"
          />
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="4" lg="3">
          <v-btn
            v-text="'Rezervasyonu Güncelle'"
            color="primary"
            block
            @click="$emit('updateReservation')"
          />
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="4" lg="3">
          <v-btn
            v-text="'Rezervasyonu İptal Et'"
            color="primary"
            block
          />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
