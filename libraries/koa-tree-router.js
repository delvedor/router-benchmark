'use strict'

const router = require('koa-tree-router')()

module.exports = {
  name: 'koa-tree-router',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      router.on(route.method, route.path.replace('*', '*foo'), noop)
    })
  },
  get (path) {
    router.find('GET', path)
  }
}
