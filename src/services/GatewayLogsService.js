import axios from 'axios';

export default class GatewayLogService {
  getGatewayLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-logs');
  }
  addGatewayLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-logs');
  }
  updateGatewayLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-logs/' + id);
  }
  deleteGatewayLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-logs/' + id);
  }
  getByGatewayLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-logs/' + id);
  }
}
