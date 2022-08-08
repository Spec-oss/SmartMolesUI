import axios from 'axios';

export default class GatewayMoistureConditionService {
  getGatewayMoistureConditions() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions');
  }
  async addGatewayMoistureConditions(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions' , data);
  }
  async updateGatewayMoistureConditions(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-moisture-conditions/' + id);
  }
  async deleteGatewayMoistureConditions(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions/' + id);
  }
  async getByGatewayMoistureConditionsId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-moisture-conditions/' + id);
  }
}
