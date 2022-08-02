import axios from 'axios';

export default class SensorMoistureLogService {
  getSensorMoistureLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log');
  }
  addSensorMoistureLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log');
  }
  updateSensorMoistureLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-moisture-log/' + id);
  }
  deleteSensorMoistureLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log/' + id);
  }
  getBySensorMoistureLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-moisture-log/' + id);
  }
}
