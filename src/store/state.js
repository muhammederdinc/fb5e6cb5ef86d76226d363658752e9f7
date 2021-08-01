export default {
  hotelList: [],
  hotelDetailList: [],
  reservationStep: Number(localStorage.getItem('reservationStep')) || 1,
  reservationInformation: JSON.parse(localStorage.getItem('reservationInformation')) || {},
};
