import './pages/login-page';
import './pages/register-page';
import { Router } from '@vaadin/router';

const routes = [
  {
    path: '/',
    component: 'login-page',
  },
  {
    path: '/register',
    component: 'register-page',
  },
  {
    path: '/home',
    component: 'home-page',
  },
];

const main = document.querySelector('main');

const router = new Router(main);

router.setRoutes(routes);
