'use strict'

const RoadRunner = require('@parisholley/road-runner')

const router = new RoadRunner()

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
