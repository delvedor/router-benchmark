'use strict'

const router = require('@parisholley/road-runner').roadrunner()

module.exports = {
  name: 'road-runner',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.addRoute(route.method, route.path, noop)
    })
  },
  get (path) {
    router.findRoute('GET', path)
  }
}
