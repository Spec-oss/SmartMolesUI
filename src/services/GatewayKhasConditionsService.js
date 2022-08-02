import axios from 'axios';

export default class GatewayKhasConditionService {
  getGatewayKhasConditions() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions');
  }
  addGatewayKhasConditions() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions');
  }
  updateGatewayKhasConditions(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-khas-conditions/' + id);
  }
  deleteGatewayKhasConditions(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions/' + id);
  }
  getByGatewayKhasConditionsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions/' + id);
  }
}
