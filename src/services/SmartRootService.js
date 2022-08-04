import axios from 'axios';

export default class SmartRootService {
  getSmartRoot() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root');
  }
  async addSmartRoot(data) {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/smart-root' , data);
  }
  async updateSmartRoot(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /smart-root/' + id);
  }
  async deleteSmartRoot(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root/' + id);
  }
  async getBySmartRootId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root/' + id);
  }
}
