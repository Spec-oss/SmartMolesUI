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
import DeviceTypes from './pages/settings/deviceTypes/DeviceTypes';
import DeviceLocations from './pages/settings/deviceLocations/DeviceLocations';
import PumpManagementTypes from './pages/settings/pumpManagementTypes/PumpManagementTypes';
import Plants from './pages/settings/plants/Plants';
import IrrigationTypes from './pages/settings/irrigationTypes/IrrigationTypes';
import SimCards from './pages/users/simCards/SimCards';
import ModemImeiRecords from './pages/users/modemImeiRecords/ModemImeiRecords';
import Settings from './pages/settings/Settings';
import CapillarityDetail from './pages/capillarity/CapillarityDetail';
import Root from './pages/root/Root';
import UserDetail from './pages/users/UserDetail';
import GatewayLogs from './pages/logs/GatewayLogs';
import PumpCardLogs from './pages/logs/PumpCardLogs';
import SensorCalibrationLog from './pages/logs/SensorCalibrationLog';
import SensorCardLogs from './pages/logs/SensorCardLogs';
import SensorMoistureLog from './pages/logs/SensorMoistureLog';
import TimerManagementLogs from './pages/logs/TimerManagementLogs';
import ValveCardLogs from './pages/logs/ValveCardLogs';
import WorkGroupsLog from './pages/logs/WorkGroupsLog';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'user-detail', element: <UserDetail /> },
        { path: 'simcards', element: <SimCards /> },
        { path: 'modem-records', element: <ModemImeiRecords /> },
        { path: 'capillarity/detail', element: <CapillarityDetail /> },
        { path: 'root/detail', element: <Root /> },
        { path: 'report', element: <Reports /> },
        { path: 'products', element: <Products /> },
        { path: 'settings', element: <Settings /> },
        { path: 'plants', element: <Plants /> },
        { path: 'irrigation-types', element: <IrrigationTypes /> },
        { path: 'device-types', element: <DeviceTypes /> },
        { path: 'device-locations', element: <DeviceLocations /> },
        { path: 'pump-management-types', element: <PumpManagementTypes /> },
        { path: 'gateway-logs', element: <GatewayLogs /> },
        { path: 'pump-card-logs', element: <PumpCardLogs /> },
        { path: 'sensor-calibration-logs', element: <SensorCalibrationLog /> },
        { path: 'sensor-card-logs', element: <SensorCardLogs /> },
        { path: 'sensor-moisture-logs', element: <SensorMoistureLog /> },
        { path: 'timer-management-logs', element: <TimerManagementLogs /> },
        { path: 'valve-card-logs', element: <ValveCardLogs /> },
        { path: 'work-groups-logs', element: <WorkGroupsLog /> },
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
