export default {
  getHotelDetailById: (state) => (id) => state.hotelDetailList.find((hotel) => hotel.id === id),
};
