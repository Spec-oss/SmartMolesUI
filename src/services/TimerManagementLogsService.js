import axios from 'axios';

export default class TimerManagementLogService {
  getTimerManagementLog() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs');
  }
  async addTimerManagementLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs' , data);
  }
  async updateTimerManagementLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /timer-management-logs/' + id);
  }
  async deleteTimerManagementLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs/' + id);
  }
  async getByTimerManagementLogId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-logs/' + id);
  }
}
