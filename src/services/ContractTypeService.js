import axios from 'axios';

export default class ContractTypeService {
  getContractType() {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/contract-types');
  }
  async addContractType(data) {
    return axios.post(process.env.REACT_APP_API_URL_NEW + '/contract-types' , data);
  }
  async updateContractType(id, data) {
    return axios.put(process.env.REACT_APP_API_URL_NEW + '/contract-types/' + id, data);
  }
  async deleteContractType(id) {
    return axios.delete(process.env.REACT_APP_API_URL_NEW + '/contract-types/' + id);
  }
  async getByContractTypeId(id) {
    return axios.get(process.env.REACT_APP_API_URL_NEW + '/contract-types/' + id);
  }
}
