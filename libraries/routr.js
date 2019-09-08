'use strict'

const Routr = require('routr')

let router

module.exports = {
  name: 'routr',
  registerRoutes (routes) {
    router = new Routr(routes.map(r => ({
      ...r,
      name: r.path
    })))
  },
  get (path) {
    router.getRoute(path, {method: 'GET'})
  }
}
