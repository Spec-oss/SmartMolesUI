import axios from 'axios';

export default class TimerManagementDetailService {
  getTimerManagementDetails() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/timer-management-details');
  }
  addTimerManagementDetails() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/timer-management-details');
  }
  updateTimerManagementDetails(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /timer-management-details/' + id);
  }
  deleteTimerManagementDetails(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-details/' + id);
  }
  getByTimerManagementDetailsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-details/' + id);
  }
}
