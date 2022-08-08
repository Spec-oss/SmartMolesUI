import axios from 'axios';

export default class GatewayFieldsService {
  getGatewayField() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-fields');
  }
  async addGatewayField(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/gateway-fields' , data );
  }
  async updateGatewayField(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /gateway-fields/' + id);
  }
  async deleteGatewayField(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/gateway-fields/' + id);
  }
  async getByGatewayFieldId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/gateway-fields/' + id);
  }
}
