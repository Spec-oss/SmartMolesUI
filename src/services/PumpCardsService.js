import axios from 'axios';

export default class PumpCardService {
  getPumpCards() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/pump-cards');
  }
  addPumpCards() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/pump-cards');
  }
  updatePumpCards(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /pump-cards/' + id);
  }
  deletePumpCards(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards/' + id);
  }
  getByPumpCardsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/pump-cards/' + id);
  }
}
