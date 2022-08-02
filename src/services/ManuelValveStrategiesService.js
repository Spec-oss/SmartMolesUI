import axios from 'axios';

export default class ManuelValveStrategiesService {
  getManuelValveStrategiess() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies');
  }
  addManuelValveStrategiess() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies');
  }
  updateManuelValveStrategiess(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /manuel-valve-strategies/' + id);
  }
  deleteManuelValveStrategiess(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies/' + id);
  }
  getByManuelValveStrategiessId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/manuel-valve-strategies/' + id);
  }
}
