import { Dashboard, Add, Settings } from '@material-ui/icons';
import Home from '../pages/Home';
import AddCategory from '../pages/AddCategory/AddCategory';
import Integration from '../pages/Integration';
import EditCategory from '../pages/EditCategory';

const routes = {
  HOME() { return `/`; }
};

export const PATH = {
  HOME: '/',
  ADD_CATEGORY: '/add-category/',
  EDIT_CATEGORY: '/edit-category/',
  TRY_API: '/try-api/'
};

export const ROUTES = [
  {
    title: 'Category',
    path: PATH.HOME,
    Icon: Dashboard,
    page: Home,
    showInDrawer: true
  },
  {
    title: 'Add More Category',
    path: PATH.ADD_CATEGORY,
    Icon: Add,
    page: AddCategory,
    showInDrawer: true
  },
  {
    title: 'Edit Category',
    path: PATH.EDIT_CATEGORY + ':categoryId',
    Icon: Add,
    page: EditCategory,
    showInDrawer: false
  },
  {
    title: 'Try Configuration',
    path: PATH.TRY_API,
    Icon: Settings,
    page: Integration,
    showInDrawer: true
  }
];

export default routes;
