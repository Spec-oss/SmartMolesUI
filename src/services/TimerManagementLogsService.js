import axios from 'axios';

export default class TimerManagementLogService {
  getTimerManagementLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs');
  }
  addTimerManagementLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs');
  }
  updateTimerManagementLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /timer-management-logs/' + id);
  }
  deleteTimerManagementLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs/' + id);
  }
  getByTimerManagementLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs/' + id);
  }
}
