import { Dashboard } from '@material-ui/icons';
import Home from '../pages/Home';

const routes = {
  HOME() { return `/`; }
};

export const PATH = {
  HOME: '/'
};

export const ROUTES = [
  {
    title: 'Dashboarrd',
    path: PATH.HOME,
    Icon: Dashboard,
    page: Home
  }
];

export default routes;
