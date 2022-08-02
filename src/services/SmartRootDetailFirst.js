import axios from 'axios';

export default class SmartRootDetailFirstService {
  getSmartRootDetailFirst() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root-first');
  }
  addSmartRootDetailFirst() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/smart-root-first');
  }
  updateSmartRootDetailFirst(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /smart-root-first/' + id);
  }
  deleteSmartRootDetailFirst(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root-first/' + id);
  }
  getBySmartRootDetailFirstId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root-first/' + id);
  }
}
