import axios from 'axios';

export default class PumpManagementTypeService {
  getPumpManagementTypes() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-management-types');
  }
  addPumpManagementTypes() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/pump-management-types');
  }
  updatePumpManagementTypes(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /pump-management-types/' + id);
  }
  deletePumpManagementTypes(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-management-types/' + id);
  }
  getByPumpManagementTypesId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-management-types/' + id);
  }
}
