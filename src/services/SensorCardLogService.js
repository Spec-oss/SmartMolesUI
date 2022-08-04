import axios from 'axios';

export default class SensorCardLogService {
  getSensorCardLog() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log');
  }
  async addSensorCardLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log' , data);
  }
  async updateSensorCardLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-card-log/' + id);
  }
  async deleteSensorCardLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log/' + id);
  }
  async getBySensorCardLogId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log/' + id);
  }
}
