import axios from 'axios';

export default class SmartRootService {
  getSmartRoots() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/smart-root');
  }
  addSmartRoots() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/smart-root');
  }
  updateSmartRoots(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /smart-root/' + id);
  }
  deleteSmartRoots(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root/' + id);
  }
  getBySmartRootsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/smart-root/' + id);
  }
}
