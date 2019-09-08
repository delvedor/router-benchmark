'use strict'

const router = require('server-router')()

module.exports = {
  name: 'server-router',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.route(route.method, route.path, noop)
    })
  },
  get (path) {
    router._router.match(`GET${path}`)
  }
}
