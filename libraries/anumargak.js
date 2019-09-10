'use strict'

const router = require('anumargak')()

module.exports = {
  name: 'anumargak',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.on(route.method, route.path, noop)
    })
  },
  get (path) {
    router.find('GET', path)
  }
}
