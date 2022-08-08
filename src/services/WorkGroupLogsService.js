import axios from 'axios';

export default class WorkGroupLogService {
  getWorkGroupLog() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/work-group-logs');
  }
  async addWorkGroupLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/work-group-logs' , data);
  }
  async updateWorkGroupLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /work-group-logs/' + id);
  }
  async deleteWorkGroupLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/work-group-logs/' + id);
  }
  async getByWorkGroupLogId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/work-group-logs/' + id);
  }
}
