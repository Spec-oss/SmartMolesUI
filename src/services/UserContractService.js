import axios from 'axios';

export default class ContractTypeService {
  getUserContract() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/user-contracts');
  }
  async addUserContract(data) {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/user-contracts' , data);
  }
  async updateUserContract(id, data) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + '/user-contracts/' + id, data);
  }
  async deleteUserContract(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/user-contracts/' + id);
  }
  async getByUserContractId(id) {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/user-contracts/' + id);
  }
  async getByUserId(id) {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/user-contracts/gey-by-user/' + id);
  }
}
