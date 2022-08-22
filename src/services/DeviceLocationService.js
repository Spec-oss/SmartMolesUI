import axios from 'axios';

export default class DeviceLocationServices {
  getDeviceLocation() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/devices-location');
  }
  async addDeviceLocation(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/devices-location', data);
  }
  async updateDeviceLocation(id, data) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + '/devices-location/' + id, data);
  }
  async deleteDeviceLocation(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/devices-location/' + id);
  }
  async getByDeviceLocationId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/devices-location/' + id);
  }
}
