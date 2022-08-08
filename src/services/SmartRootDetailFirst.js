import axios from 'axios';

export default class SmartRootDetailFirstService {
  getSmartRootDetailFirst() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root-first');
  }
  async addSmartRootDetailFirst(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/smart-root-first' , data);
  }
  async updateSmartRootDetailFirst(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /smart-root-first/' + id);
  }
  async deleteSmartRootDetailFirst(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root-first/' + id);
  }
  async getBySmartRootDetailFirstId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root-first/' + id);
  }
}
