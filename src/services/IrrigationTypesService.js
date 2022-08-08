import axios from 'axios';

export default class IrrigationTypeService {
  getIrrigationType() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/irrigation-types');
  }
  async addIrrigationType(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/irrigation-types' , data);
  }
  async updateIrrigationType(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /irrigation-types/' + id);
  }
  async deleteIrrigationType(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/irrigation-types/' + id);
  }
  async getByIrrigationTypeId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/irrigation-types/' + id);
  }
}
