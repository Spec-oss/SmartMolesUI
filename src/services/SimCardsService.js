import axios from 'axios';

export default class SimCardService {
  getSimCards() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/simcards');
  }
  addSimCards() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/simcards');
  }
  updateSimCards(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /simcards/' + id);
  }
  deleteSimCards(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/simcards/' + id);
  }
  getBySimCardsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/simcards/' + id);
  }
}
