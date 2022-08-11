import axios from 'axios';

export default class SensorMoistureLogService {
  async getSensorMoistureLog() {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log');
  }
  async addSensorMoistureLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log' , data);
  }
  async updateSensorMoistureLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-moisture-log/' + id);
  }
  async deleteSensorMoistureLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log/' + id);
  }
  async getBySensorMoistureLogId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log/' + id);
  }
}
