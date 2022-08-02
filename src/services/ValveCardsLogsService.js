import axios from 'axios';

export default class ValveCardsLogService {
  getValveCardsLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs');
  }
  addValveCardsLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs');
  }
  updateValveCardsLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /valve-cards-logs/' + id);
  }
  deleteValveCardsLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs/' + id);
  }
  getByValveCardsLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/valve-cards-logs/' + id);
  }
}
