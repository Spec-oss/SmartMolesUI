import axios from 'axios';

export default class WorkGroupService {
  getWorkGroup() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/work-group');
  }
  async addWorkGroup(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/work-group' , data);
  }
  async updateWorkGroup(id, data) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + '/work-group/' + id, data);
  }
  async deleteWorkGroup(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/work-group/' + id);
  }
  async getByWorkGroupId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/work-group/' + id);
  }
  async getByGatewayId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/work-group/get-by-gateway/' + id);
  }
}
