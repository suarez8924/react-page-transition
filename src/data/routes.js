import Homepage from '../pages/homepage';
import WonderPage from '../pages/wonder-page';

const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Homepage,
  },
  {
    path: '/great-wall-of-china',
    name: 'Great Wall of China',
    Component: WonderPage,
  },
  {
    path: '/chichen-itza',
    name: 'Chichén Itzá',
    Component: WonderPage,
  },
  {
    path: '/petra',
    name: 'Petra',
    Component: WonderPage,
  },
  {
    path: '/machu-picchu',
    name: 'Machu Picchu',
    Component: WonderPage,
  },
  {
    path: '/christ-the-redeemer',
    name: 'Christ the Redeemer',
    Component: WonderPage,
  },
  {
    path: '/colosseum',
    name: 'Colosseum',
    Component: WonderPage,
  },
  {
    path: '/taj-mahal',
    name: 'Taj Mahal',
    Component: WonderPage,
  },
];

export default routes;
