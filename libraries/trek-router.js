'use strict'

const Router = require('trek-router')
const router = new Router()

module.exports = {
  name: 'trek-router',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.add(route.method, route.path, noop)
    })
  },
  get (path) {
    router.find('GET', path)
  }
}
