<script>
export default {
  name: 'AppConfirmDialog',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'mdi-alert-octagon',
    },
  },
  data() {
    return {
      isDialogVisible: true,
    };
  },
};
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    max-width="450"
    persistent
  >
    <v-card>
      <v-card-title class="d-flex justify-center">
        <v-icon
          v-text="icon"
          x-large
          color="warning"
        />
      </v-card-title>

      <v-card-text
        v-text="text"
        class="body-1"
      />

      <v-card-actions>
        <v-spacer />

        <v-btn
          text
          color="error"
          @click="$emit('cancel')"
        >
          İptal
        </v-btn>

        <v-btn
          color="success"
          class="white--text"
          @click="$emit('confirm')"
        >
          Onayla
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
