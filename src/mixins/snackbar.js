import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      snackbar: {
        visibility: false,
        message: '',
        displayTime: 5000,
        type: '',
      },
    };
  },
  methods: {
    ...mapMutations(['setSnackbar']),
    showSnackbar(message = '', type = '') {
      if (type === 'error' || type === 'success' || type === 'info') {
        this.snackbar.type = type;
      }

      this.snackbar.message = message;
      this.snackbar.visibility = true;

      this.setSnackbar(this.snackbar);
    },
  },
};
