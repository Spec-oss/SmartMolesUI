import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/users/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Reports from './pages/reports/Reports';
import Devices from './pages/devicesandAuthorization/Devices';
import DeviceTypes from './pages/devicesandAuthorization/deviceTypes/DeviceTypes';
import DeviceLocations from './pages/devicesandAuthorization/deviceLocations/DeviceLocations';
import PumpManagementTypes from './pages/devicesandAuthorization/pumpManagementTypes/PumpManagementTypes';
import SimCards from './pages/devicesandAuthorization/simCards/SimCards';
import ModemImeiRecords from './pages/devicesandAuthorization/modemImeiRecords/ModemImeiRecords';
import Settings from './pages/settings/Settings';
import CapillarityDetail from './pages/capillarity/CapillarityDetail';
import Root from './pages/root/Root';
import { element } from 'prop-types';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'report', element: <Reports /> },
        { path: 'devices', element: <Devices /> },
          {path: 'device-types', element: <DeviceTypes/>},
          {path: 'device-locations', element: <DeviceLocations/>},
          {path: 'pump-management-types', element: <PumpManagementTypes/>},
          {path: 'simcards', element: <SimCards/>},
          {path: 'modem-records', element: <ModemImeiRecords/>},
        { path: 'products', element: <Products /> },
        { path: 'settings', element: <Settings />},
        { path: 'capillarity/detail', element: <CapillarityDetail />},
        { path: 'root/detail', element: <Root />},
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
