'use strict'

const router = require('express/lib/router')()

module.exports = {
  name: 'express',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      if (route.method === 'GET') {
        router.route(route.path).get(noop)
      } else {
        router.route(route.path).post(noop)
      }
    })
  },
  get (path, noop) {
    router.handle({
      method: 'GET',
      url: path
    }, null, noop)
  }
}
