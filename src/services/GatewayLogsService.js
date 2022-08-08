import axios from 'axios';

export default class GatewayLogService {
  getGatewayLog() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-logs');
  }
  async addGatewayLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-logs' , data);
  }
  async updateGatewayLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-logs/' + id);
  }
  async deleteGatewayLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-logs/' + id);
  }
  async getByGatewayLogId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-logs/' + id);
  }
}
