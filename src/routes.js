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
import DeviceTypeDetail from './pages/settings/deviceTypes/DeviceTypeDetail'
import DeviceLocations from './pages/settings/deviceLocations/DeviceLocations';
import DeviceLocationDetail from './pages/settings/deviceLocations/DeviceLocationDetail';
import PumpManagementTypes from './pages/settings/pumpManagementTypes/PumpManagementTypes';
import PumpManagementTypeDetail from './pages/settings/pumpManagementTypes/PumpManagementTypeDetail';
import Contract from './pages/users/contract/Contract';
import ContractType from './pages/settings/contractTypes/ContractTypes';
import ContractTypeDetail from './pages/settings/contractTypes/ContractTypeDetail';
import Plants from './pages/settings/plants/Plants';
import PlantDetail from './pages/settings/plants/PlantDetail'
import IrrigationTypes from './pages/settings/irrigationTypes/IrrigationTypes';
import IrrigationTypeDetail from './pages/settings/irrigationTypes/IrrigationTypeDetail'
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
import Gateway from './pages/users/gateway/Gateway';
import GatewayDetail from './pages/users/gateway/GatewayDetail';
import GatewayFieldDetail from './pages/users/gateway/gatewayFields/GatewayFieldDetail';

import Setup from './pages/setup/Setup';
import WorkGroupDetail from './pages/users/gateway/gatewayFields/workGroup/WorkGroupDetail';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'user-detail/userID=:userID', element: <UserDetail /> },
        { path: 'contract/userID=:userID', element: <Contract /> },
        { path: 'simcards', element: <SimCards /> },
        { path: 'modem-records', element: <ModemImeiRecords /> },
        { path: 'capillarity/detail', element: <CapillarityDetail /> },
        { path: 'root/detail', element: <Root /> },
        { path: 'gateway/userID=:userID', element: <Gateway /> },
        { path: 'gateway-detail/gatewayId=:gatewayID', element: <GatewayDetail /> },
        { path: 'gateway-field-detail/gatewayId=:gatewayID/gatewayfieldID=:gatewayfieldID', element: <GatewayFieldDetail/>},
        { path: 'workgroup-detail/workgroupId=:workgroupID', element: <WorkGroupDetail /> },
        { path: 'setup', element: <Setup />},
        { path: 'report', element: <Reports /> },
        { path: 'products', element: <Products /> },
        { path: 'settings', element: <Settings /> },
        { path: 'plants', element: <Plants /> },
        { path: 'plant-detail/plantID=:plantID', element: <PlantDetail /> },
        { path: 'irrigation-types', element: <IrrigationTypes /> },
        { path: 'irrigation-type-detail/irrigationTypeID=:irrigationTypeID', element: <IrrigationTypeDetail /> },
        { path: 'device-types', element: <DeviceTypes /> },
        { path: 'device-type-detail/deviceTypeID=:deviceTypeID', element: <DeviceTypeDetail /> },
        { path: 'device-locations', element: <DeviceLocations /> },
        { path: 'device-location-detail/deviceLocationID=:deviceLocationID', element: <DeviceLocationDetail /> },
        { path: 'pump-management-types', element: <PumpManagementTypes /> },
        { path: 'pump-management-type-detail/pumpManagementTypeID=:pumpManagementTypeID', element: <PumpManagementTypeDetail /> },
        { path: 'contract-types', element: <ContractType /> },
        { path: 'contract-type-detail/contractTypeID=:contractTypeID', element: <ContractTypeDetail /> },
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
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
