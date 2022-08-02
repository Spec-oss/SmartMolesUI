import axios from 'axios';

export default class DeviceTypeService {
  getDeviceType() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/devices-types');
  }
  addDeviceType() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/devices-types');
  }
  updateDeviceType(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /devices-types/' + id);
  }
  deleteDeviceType(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/devices-types/' + id);
  }
  getByDeviceTypeId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/devices-types/' + id);
  }
}
