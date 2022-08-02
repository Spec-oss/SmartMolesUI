import axios from 'axios';

export default class SensorCardLogService {
  getSensorCardLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log');
  }
  addSensorCardLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log');
  }
  updateSensorCardLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-card-log/' + id);
  }
  deleteSensorCardLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log/' + id);
  }
  getBySensorCardLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-log/' + id);
  }
}
