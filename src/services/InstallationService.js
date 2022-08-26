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
  async addUserContract(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/record-user-contract', data);
  }
  async addSubscription(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/subscription', data);
  }
  async addSimCard(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/simcard', data);
  }
  async addModem(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/modem-imei', data);
  }
  async addGateway(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/gateway', data);
  }
  async addFields(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/gateway-fields', data);
  }
  async addWorkGroup(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/work-group', data);
  }
  async addSensor(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/sensor-card', data);
  }
  async addValve(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/valve-card', data);
  }
  async addPump(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sys-installation/install/pump-card', data);
  }
}
