import axios from 'axios';

export default class SensorCalibrationLogService {
  getSensorCalibrationLogs() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log');
  }
  addSensorCalibrationLogs() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log');
  }
  updateSensorCalibrationLogs(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /sensor-calibration-log/' + id);
  }
  deleteSensorCalibrationLogs(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log/' + id);
  }
  getBySensorCalibrationLogsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/sensor-calibration-log/' + id);
  }
}
