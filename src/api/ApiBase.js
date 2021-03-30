import axios from 'axios'

class Api {
  constructor () {
    this.baseUrl = `http://localhost:5000/`
  }

  get $http () {
    return axios
  }

  asSubscription ({ promise, requestConfig, beforeExecution, successCb, failCb, finallyCb }) {
    if (!promise) throw new Error('promise is required!')

    const token = this.$http.CancelToken
    const source = token.source()

    const subscribe = async () => {
      if (typeof beforeExecution === 'function') beforeExecution()

      try {
        const additionalConfig = requestConfig && typeof requestConfig === 'object'
          ? requestConfig
          : {}

        const promiseConfig = {
          cancelToken: source.token,
          ...additionalConfig
        }

        const { data } = await promise.call(this, promiseConfig)
        successCb(data)
      } catch (e) {
        if (this.$http.isCancel(e)) {
        } else if (typeof failCb === 'function') {
          failCb(e)
        } else {
          throw e
        }
      } finally {
        if (typeof finallyCb === 'function') finallyCb()
      }
    }

    return {
      subscribe,
      unsubscribe: source.cancel
    }
  }
}

export default Api
