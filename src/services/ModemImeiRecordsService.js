import axios from 'axios';

export default class ModemImeiRecordService {
  getModemImeiRecord() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records');
  }
  async addModemImeiRecord(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records' , data);
  }
  async updateModemImeiRecord(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /modem-imei-records/' + id);
  }
  async deleteModemImeiRecord(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records/' + id);
  }
  async getByModemImeiRecordId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/modem-imei-records/' + id);
  }
}
