import axios from 'axios';

export default class SensorCardParamService {
  getSensorCardParam() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params');
  }
  async addSensorCardParam(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params' , data);
  }
  async updateSensorCardParam(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-card-params/' + id);
  }
  async deleteSensorCardParam(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params/' + id);
  }
  async getBySensorCardParamId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-card-params/' + id);
  }
}
