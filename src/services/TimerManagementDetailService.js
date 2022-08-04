import axios from 'axios';

export default class TimerManagementDetailService {
  getTimerManagementDetail() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/timer-management-details');
  }
  async addTimerManagementDetail(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/timer-management-details' , data);
  }
  async updateTimerManagementDetail(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /timer-management-details/' + id);
  }
  async deleteTimerManagementDetail(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-details/' + id);
  }
  async getByTimerManagementDetailId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/timer-management-details/' + id);
  }
}
