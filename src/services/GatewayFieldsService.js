import axios from 'axios';

export default class GatewayFieldsService {
  getGatewayField() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-fields');
  }
  addGatewayField() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-fields');
  }
  updateGatewayField(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-fields/' + id);
  }
  deleteGatewayField(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-fields/' + id);
  }
  getByGatewayFieldId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-fields/' + id);
  }
}
