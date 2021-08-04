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
      default: 'XXXXXXXXXXXXXXXX',
    },
    cvv: {
      type: String,
      default: 'XXX',
    },
    date: {
      type: String,
      default: 'XX/XXXX',
    },
    name: {
      type: String,
      default: 'XXXXXXXX',
    },
  },
  computed: {
    creditCardNumber() {
      const one = this.number.substring(0, 4);
      const two = this.number.substring(4, 8);
      const three = this.number.substring(8, 12);
      const four = this.number.substring(12, 16);

      return `${one} ${two} ${three} ${four}`;
    },
    creditCardCVV() {
      return this.cvv.substring(0, 3);
    },
    creditCardName() {
      return this.name.substring(0, 12);
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
      v-text="creditCardNumber"
      class="credit-card__number px-10 pt-8 price"
      cols="12"
    />

    <v-col
      class="d-flex credit-card__subtitle align-end py-16 px-10"
      cols="9"
    >
      <span v-text="date" />

      <span v-text="creditCardCVV" class="mx-2" />

      <span v-text="creditCardName" />
    </v-col>

    <v-col
      class="d-flex justify-end pa-10"
      cols="3"
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
  height: 335px;
  max-width: 550px;
  background: linear-gradient(-125deg, #1D3349, #06121E 55%);

  &__title {
    font-family: Signika;
    font-size: 28px;
    font-weight: 400;
    opacity: 0.8;
  }

  &__subtitle {
    font-size: 20px;
    font-family: Share Tech Mono;
    color: transparent;
    text-shadow: -2px -2px 2px rgba(255,255,255,1),
                  1px 1px 1px rgba(0,0,0,0.9),
                  -2px -2px 2px rgba(0,0,0,0.9),
                  -2px 2px 1px rgba(0,0,0,0.9);
    -webkit-text-stroke:2px rgba(0,0,0,0.4);
  }

  &__number {
    font-size: 34px;
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
