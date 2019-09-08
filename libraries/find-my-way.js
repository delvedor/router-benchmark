'use strict'

const router = require('find-my-way')()

module.exports = {
  name: 'find-my-way',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.on(route.method, route.path, noop)
    })
  },
  get (path) {
    router.find('GET', path)
  }
}
