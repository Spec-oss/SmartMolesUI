import axios from 'axios';

export default class PumpCardService {
  getPumpCard() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-cards');
  }
  async addPumpCard(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/pump-cards' , data);
  }
  async updatePumpCard(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /pump-cards/' + id);
  }
  async deletePumpCard(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards/' + id);
  }
  async getByPumpCardId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards/' + id);
  }
}
