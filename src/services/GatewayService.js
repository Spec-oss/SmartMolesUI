import axios from 'axios';

export default class GatewayService {
  getGateways() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway');
  }
  addGateways() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway');
  }
  updateGateways(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway/' + id);
  }
  deleteGateways(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway/' + id);
  }
  getByGatewaysId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway/' + id);
  }
}
