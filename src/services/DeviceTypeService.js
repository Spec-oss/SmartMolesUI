import axios from 'axios';

export default class DeviceTypeService {
  getDeviceType() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/devices-types');
  }
  async addDeviceType(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/devices-types' , data);
  }
  async updateDeviceType(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /devices-types/' + id);
  }
  async deleteDeviceType(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/devices-types/' + id);
  }
  async getByDeviceTypeId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/devices-types/' + id);
  }
}