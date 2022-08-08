import axios from 'axios';

export default class SimCardService {
  getSimCard() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/simcards');
  }
  async addSimCard(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/simcards' , data);
  }
  async updateSimCard(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /simcards/' + id);
  }
  async deleteSimCard(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/simcards/' + id);
  }
  async getBySimCardId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/simcards/' + id);
  }
}
