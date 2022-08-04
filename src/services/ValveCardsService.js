import axios from 'axios';

export default class ValveCardService {
  getValveCard() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/valve-cards');
  }
  async addValveCard(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/valve-cards' , data);
  }
  async updateValveCard(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /valve-cards/' + id);
  }
  async deleteValveCard(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/valve-cards/' + id);
  }
  async getByValveCardId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/valve-cards/' + id);
  }
}
