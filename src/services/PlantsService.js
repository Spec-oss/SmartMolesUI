import axios from 'axios';

export default class PlantService {
  getPlant() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/plants');
  }
  async addPlant(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/plants' , data);
  }
  async updatePlant(id, data) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + '/plants/' + id, data);
  }
  async deletePlant(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/plants/' + id);
  }
  async getByPlantId(id) {
    return await axios.get(process.env.REACT_APP_API_URL_NEW + '/plants/' + id);
  }
}
