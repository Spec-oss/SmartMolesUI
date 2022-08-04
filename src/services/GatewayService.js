import axios from 'axios';

export default class GatewayService {
  getGateway() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway');
  }
  async addGateway(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway' , data);
  }
  async updateGateway(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway/' + id);
  }
  async deleteGateway(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway/' + id);
  }
  async getByGatewayId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway/' + id);
  }
}
