import axios from 'axios';

export default class InstallationService {
  getUser() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/users');
  }
  async addUser(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/user', data);
  }
  async addContractType(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/contract-type', data);
  }
}
