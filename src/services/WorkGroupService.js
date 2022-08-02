import axios from 'axios';

export default class WorkGroupService {
  getWorkGroups() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/work-group');
  }
  addWorkGroups() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/work-group');
  }
  updateWorkGroups(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /work-group/' + id);
  }
  deleteWorkGroups(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/work-group/' + id);
  }
  getByWorkGroupsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/work-group/' + id);
  }
}
