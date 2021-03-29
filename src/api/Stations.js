import Api from '@/api/ApiBase.js'

class Stations extends Api {
  getList (config = {}) {
    return this.$http.get(`${this.baseUrl}stations/`, config)
  }
}

export default new Stations()
