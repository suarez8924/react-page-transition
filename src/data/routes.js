import Homepage from '../pages/homepage';
import WonderPage from '../pages/wonder-page';
import sevenWonders from './seven-wonders';

const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Homepage,
  },
  {
    path: sevenWonders[0].path,
    name: 'Great Wall of China',
    Component: WonderPage,
  },
  {
    path: sevenWonders[1].path,
    name: 'Chichén Itzá',
    Component: WonderPage,
  },
  {
    path: '/petra',
    name: 'Petra',
    Component: WonderPage,
  },
  {
    path: sevenWonders[3].path,
    name: 'Machu Picchu',
    Component: WonderPage,
  },
  {
    path: sevenWonders[4].path,
    name: 'Christ the Redeemer',
    Component: WonderPage,
  },
  {
    path: sevenWonders[5].path,
    name: 'Colosseum',
    Component: WonderPage,
  },
  {
    path: sevenWonders[6].path,
    name: 'Taj Mahal',
    Component: WonderPage,
  },
];

export default routes;
