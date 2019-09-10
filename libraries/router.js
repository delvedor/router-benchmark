'use strict'

const router = require('router')()

module.exports = {
  name: 'router',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      if (route.method === 'GET') {
        router.get(route.path, noop)
      } else {
        router.post(route.path, noop)
      }
    })
  },
  get (path, noop) {
    router({ method: 'GET', url: path }, null, noop)
  }
}
