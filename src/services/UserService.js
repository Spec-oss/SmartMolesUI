import axios from 'axios';

export default class UserService {
  getUser() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/users');
  }
  async addUser(data) {
    return await axios.post(process.env.REACT_APP_API_URL_NEW + '/users/register', data);
  }
  async updateUser(id) {
    return await axios.put(process.env.REACT_APP_API_URL_NEW + ' /users/' + id);
  }
  async deleteUser(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/users/' + id);
  }
  async getByUserId(id) {
    return await axios.delete(process.env.REACT_APP_API_URL_NEW + '/users/' + id);
  }
}
