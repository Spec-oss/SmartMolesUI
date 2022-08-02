import axios from 'axios';

export default class IrrigationTypeService {
  getIrrigationTypes() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/irrigation-types');
  }
  addIrrigationTypes() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/irrigation-types');
  }
  updateIrrigationTypes(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /irrigation-types/' + id);
  }
  deleteIrrigationTypes(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/irrigation-types/' + id);
  }
  getByIrrigationTypesId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/irrigation-types/' + id);
  }
}
