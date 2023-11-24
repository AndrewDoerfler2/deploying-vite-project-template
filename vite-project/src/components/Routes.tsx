
import WelcomePage from './Pages/WelcomePage';
import AboutMePage from './Pages/AboutMePage';

const routes = [
  {
    path: '/',
    component: WelcomePage,
    exact: true,
  },
  {
    path: '/about',
    component: AboutMePage,
    exact: true,
  },
];

export default routes;
