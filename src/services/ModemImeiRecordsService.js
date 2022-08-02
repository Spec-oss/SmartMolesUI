import axios from 'axios';

export default class ModemImeiRecordsService {
  getModemImeiRecords() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records');
  }
  addModemImeiRecords() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records');
  }
  updateModemImeiRecords(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /modem-imei-records/' + id);
  }
  deleteModemImeiRecords(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records/' + id);
  }
  getByModemImeiRecordsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records/' + id);
  }
}
