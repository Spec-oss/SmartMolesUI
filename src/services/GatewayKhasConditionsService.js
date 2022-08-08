import axios from 'axios';

export default class GatewayKhasConditionService {
  getGatewayKhasCondition() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions');
  }
  async addGatewayKhasCondition(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions', data);
  }
  async updateGatewayKhasCondition(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-khas-conditions/' + id);
  }
  async deleteGatewayKhasCondition(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions/' + id);
  }
  async getByGatewayKhasConditionId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-khas-conditions/' + id);
  }
}
