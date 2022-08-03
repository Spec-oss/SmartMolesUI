import axios from 'axios';

export default class DeviceLocationServices {
  getDeviceLocation() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/devices-location');
  }
  addDeviceLocation(data) {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/devices-location', data);
  }
  updateDeviceLocation(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /devices-location/' + id);
  }
  deleteDeviceLocation(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/devices-location/' + id);
  }
  getByDeviceLocationId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/devices-location/' + id);
  }
}
