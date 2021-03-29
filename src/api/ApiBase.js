import axios from 'axios'

class Api {
  constructor (instanceUrl) {
    this.baseUrl = `http://localhost:5000/`
  }

  get $http () {
    return axios
  }
}

export default Api
