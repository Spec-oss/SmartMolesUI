import axios from 'axios';

export default class PumpCardsLogService {
  getPumpCardsLog() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs');
  }
  async addPumpCardsLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs' , data);
  }
  async updatePumpCardsLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /pump-cards-logs/' + id);
  }
  async deletePumpCardsLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs/' + id);
  }
  async getByPumpCardsLogId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs/' + id);
  }
}
