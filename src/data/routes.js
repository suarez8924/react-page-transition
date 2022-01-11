import Homepage from '../pages/homepage';
import WonderPage from '../pages/wonder-page';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/wonder/great-wall-of-chine',
    name: 'Great Wall of China',
    component: WonderPage,
  },
  {
    path: '/wonder/chichen-itza',
    name: 'Chichén Itzá',
    component: WonderPage,
  },
  {
    path: '/wonder/petra',
    name: 'Petra',
    component: WonderPage,
  },
  {
    path: '/wonder/machu-picchu',
    name: 'Machu Picchu',
    component: WonderPage,
  },
  {
    path: '/wonder/christ-the-redeemer',
    name: 'Christ the Redeemer',
    component: WonderPage,
  },
  {
    path: '/wonder/colosseum',
    name: 'Colosseum',
    component: WonderPage,
  },
  {
    path: '/wonder/taj-mahal',
    name: 'Taj Mahal',
    component: WonderPage,
  },
];

export default routes;
