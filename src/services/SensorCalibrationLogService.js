import axios from 'axios';

export default class SensorCalibrationLogService {
  getSensorCalibrationLog() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log');
  }
  async addSensorCalibrationLog(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log' , data);
  }
  async updateSensorCalibrationLog(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-calibration-log/' + id);
  }
  async deleteSensorCalibrationLog(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log/' + id);
  }
  async getBySensorCalibrationLogId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log/' + id);
  }
}
