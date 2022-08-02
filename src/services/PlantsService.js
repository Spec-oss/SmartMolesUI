import axios from 'axios';

export default class PlantService {
  getPlants() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/plants');
  }
  addPlants() {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/plants');
  }
  updatePlants(id) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + ' /plants/' + id);
  }
  deletePlants(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/plants/' + id);
  }
  getByPlantsId(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/plants/' + id);
  }
}
