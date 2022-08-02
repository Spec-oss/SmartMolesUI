import axios from 'axios';

export default class ValveCardService {
  getValveCards() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/valve-cards');
  }
  addValveCards() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/valve-cards');
  }
  updateValveCards(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /valve-cards/' + id);
  }
  deleteValveCards(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/valve-cards/' + id);
  }
  getByValveCardsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/valve-cards/' + id);
  }
}
