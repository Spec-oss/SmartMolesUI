import axios from 'axios';

export default class PumpManagementTypeService {
  getPumpManagementType() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-management-types');
  }
  async addPumpManagementType(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/pump-management-types' , data);
  }
  async updatePumpManagementType(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /pump-management-types/' + id);
  }
  async deletePumpManagementType(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-management-types/' + id);
  }
  async getByPumpManagementTypeId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-management-types/' + id);
  }
}
