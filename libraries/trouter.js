'use strict'

const Trouter = require('trouter')

const router = new Trouter()

module.exports = {
  name: 'trouter',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.add(route.method, route.path, noop)
    })
  },
  get (path) {
    router.find('GET', path)
  }
}
