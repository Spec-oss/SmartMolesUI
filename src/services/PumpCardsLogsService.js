import axios from 'axios';

export default class PumpCardsLogService {
  getPumpCardsLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs');
  }
  addPumpCardsLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs');
  }
  updatePumpCardsLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /pump-cards-logs/' + id);
  }
  deletePumpCardsLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs/' + id);
  }
  getByPumpCardsLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards-logs/' + id);
  }
}
