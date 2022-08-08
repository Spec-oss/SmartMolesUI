import axios from 'axios';

export default class ValveCardsLogService {
  getValveCardsLog() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs');
  }
  async addValveCardsLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs' , data);
  }
  async updateValveCardsLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /valve-cards-logs/' + id);
  }
  async deleteValveCardsLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs/' + id);
  }
  async getByValveCardsLogId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs/' + id);
  }
}
