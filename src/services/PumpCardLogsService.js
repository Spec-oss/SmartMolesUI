import axios from 'axios';

export default class PumpCardLogsService {
  getPumpCardLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs');
  }
  async addPumpCardLogs(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs' , data);
  }
  async updatePumpCardLogs(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /pump-cards-logs/' + id);
  }
  async deletePumpCardLogs(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs/' + id);
  }
  async getByPumpCardLogsId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs/' + id);
  }
}
