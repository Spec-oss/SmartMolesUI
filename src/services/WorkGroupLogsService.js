import axios from 'axios';

export default class WorkGroupLogService {
  getWorkGroupLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/work-group-logs');
  }
  addWorkGroupLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/work-group-logs');
  }
  updateWorkGroupLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /work-group-logs/' + id);
  }
  deleteWorkGroupLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/work-group-logs/' + id);
  }
  getByWorkGroupLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/work-group-logs/' + id);
  }
}
