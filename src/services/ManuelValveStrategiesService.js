import axios from 'axios';

export default class ManuelValveStrategiesService {
  getManuelValveStrategiess() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies');
  }
  async addManuelValveStrategiess(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies', data);
  }
  async updateManuelValveStrategiess(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /manuel-valve-strategies/' + id);
  }
  async deleteManuelValveStrategiess(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies/' + id);
  }
  async getByManuelValveStrategiessId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies/' + id);
  }
}
