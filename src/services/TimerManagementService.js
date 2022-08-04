import axios from 'axios';

export default class TimerManagementService {
  getTimerManagement() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/timer-management');
  }
  async addTimerManagement(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/timer-management' , data);
  }
  async updateTimerManagement(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /timer-management/' + id);
  }
  async deleteTimerManagement(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management/' + id);
  }
  async getByTimerManagementId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management/' + id);
  }
}
