import axios from 'axios';

export default class SensorCardService {
  getSensorCard() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-cards');
  }
  async addSensorCard(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-cards' , data);
  }
  async updateSensorCard(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-cards/' + id);
  }
  async deleteSensorCard(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-cards/' + id);
  }
  async getBySensorCardId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-cards/' + id);
  }
}
