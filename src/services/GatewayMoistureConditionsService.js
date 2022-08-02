import axios from 'axios';

export default class GatewayMoistureConditionService {
  getGatewayMoistureConditions() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions');
  }
  addGatewayMoistureConditions() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions');
  }
  updateGatewayMoistureConditions(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-moisture-conditions/' + id);
  }
  deleteGatewayMoistureConditions(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions/' + id);
  }
  getByGatewayMoistureConditionsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions/' + id);
  }
}
