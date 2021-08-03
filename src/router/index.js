import Vue from 'vue';
import VueRouter from 'vue-router';
import NewReservation from '../views/newReservation';
import ReservationPreview from '../views/reservationPreview';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'NewReservation',
    component: NewReservation,
  },
  {
    path: '/reservation-preview',
    name: 'ReservationPreview',
    component: ReservationPreview,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
