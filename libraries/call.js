'use strict'

const call = require('call')
const router = new call.Router()

module.exports = {
  name: 'call',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.add({
        method: route.method,
        path: route.path
      }, noop)
    })
  },
  get (path) {
    router.route('get', path)
  }
}
