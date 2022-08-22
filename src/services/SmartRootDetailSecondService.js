import axios from 'axios';

export default class SmartRootDetailSecondService {
  getSmartRootDetailSecond() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root-second');
  }
  async addSmartRootDetailSecond(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/smart-root-second' , data);
  }
  async updateSmartRootDetailSecond(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + '/smart-root-second/' + id);
  }
  async deleteSmartRootDetailSecond(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root-second/' + id);
  }
  async getBySmartRootDetailSecondId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root-second/' + id);
  }
}
