import axios from 'axios';

export default class SmartRootDetailSecondService {
  getSmartRootDetailSecond() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root-second');
  }
  addSmartRootDetailSecond() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/smart-root-second');
  }
  updateSmartRootDetailSecond(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /smart-root-second/' + id);
  }
  deleteSmartRootDetailSecond(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root-second/' + id);
  }
  getBySmartRootDetailSecondId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root-second/' + id);
  }
}
