import axios from 'axios';

export default class TimerManagementService {
  getTimerManagements() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/timer-management');
  }
  addTimerManagements() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/timer-management');
  }
  updateTimerManagements(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /timer-management/' + id);
  }
  deleteTimerManagements(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management/' + id);
  }
  getByTimerManagementsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management/' + id);
  }
}
