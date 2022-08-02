import axios from 'axios';

export default class SensorCardService {
  getSensorCards() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-cards');
  }
  addSensorCards() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-cards');
  }
  updateSensorCards(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-cards/' + id);
  }
  deleteSensorCards(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-cards/' + id);
  }
  getBySensorCardsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-cards/' + id);
  }
}
