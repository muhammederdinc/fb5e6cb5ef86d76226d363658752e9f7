<script>
export default {
  name: 'AppCreditCard',
  props: {
    bankName: {
      type: String,
      default: 'Bank Name',
    },
    number: {
      type: String,
      default: '1111 1235 1231 4561',
    },
    date: {
      type: String,
      default: '05/2017',
    },
  },
};
</script>

<template>
  <v-row class="credit-card">
    <v-col
      v-text="bankName"
      class="credit-card__title d-flex justify-end"
      cols="12"
    />

    <v-col
      class="px-10"
      cols="12"
    >
      <img src="@/assets/creditCardChip.png" height="40">
    </v-col>

    <v-col
      v-text="number"
      class="credit-card__number px-10 price"
      cols="12"
    />

    <v-col
      v-text="date"
      class="d-flex align-end pa-16"
      cols="6"
    />

    <v-col
      class="d-flex justify-end pa-10"
      cols="6"
    >
      <img src="@/assets/masterCard.png" height="60">
    </v-col>
  </v-row>
</template>

<style lang="scss">
.credit-card {
  color: white;
  background-color: #9BA7B2;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,1);
  margin: auto;
  height: 300px;
  width: 600px;
  background: linear-gradient(-125deg, #1D3349, #06121E 55%);

  &__title {
    font-family: Signika;
    font-size: 28px;
    font-weight: 400;
    opacity: 0.8;
    padding-left: 20px;
    padding-top: 20px;
  }

  &__number {
    font-size: 52px;
    font-family: Share Tech Mono;
    color: transparent;
    text-shadow: -2px -2px 2px rgba(255,255,255,1),
                  1px 1px 1px rgba(0,0,0,0.9),
                  2px -2px 4px rgba(255,255,255,1),
                  -2px -2px 2px rgba(0,0,0,0.9),
                  -2px 2px 1px rgba(0,0,0,0.9);
    -webkit-text-stroke:2px rgba(0,0,0,0.4);
  }
}
</style>
