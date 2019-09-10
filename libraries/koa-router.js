'use strict'

const KoaRouter = require('koa-router')
const router = new KoaRouter()

module.exports = {
  name: 'koa-router',
  registerRoutes (routes, noop) {
    routes.forEach(route => {
      if (route.method === 'GET') {
        router.get(route.path, noop)
      } else {
        router.post(route.path, noop)
      }
    })
  },
  get (path) {
    router.match(path, 'GET')
  }
}
