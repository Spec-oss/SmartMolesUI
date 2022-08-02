import axios from 'axios';

export default class SensorCardParamService {
  getSensorCardParams() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params');
  }
  addSensorCardParams() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params');
  }
  updateSensorCardParams(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-card-params/' + id);
  }
  deleteSensorCardParams(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params/' + id);
  }
  getBySensorCardParamsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params/' + id);
  }
}
