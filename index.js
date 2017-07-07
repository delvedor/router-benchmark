'use strict'

const Benchmark = require('benchmark')
const suite = Benchmark.Suite()
const noop = () => {}
const req = { url: '/bench/mark', method: 'GET' }
const url = '/bench/mark'

const findMyWay = require('find-my-way')()
const RouteRecognizer = require('route-recognizer')
const routeRecognizer = new RouteRecognizer()
const router = require('router')()
const serverRouter = require('server-router')()
const KoaRouter = require('koa-router')
const koaRouter = new KoaRouter()
const Routr = require('routr')
const routr = new Routr([{
  name: 'bench',
  path: url,
  method: 'GET'
}])
const call = require('call')
const callRouter = new call.Router()

findMyWay.on('GET', url, noop)
routeRecognizer.add([{ path: url, handler: noop }])
router.get(url, noop)
serverRouter.route('GET', url, noop)
koaRouter.get(url, noop)
callRouter.add({ method: 'GET', path: url })

suite
  .add('find-my-way | lookup static route', function () {
    findMyWay.lookup(req, null)
  })
  .add('route-recognizer | lookup static route', function () {
    routeRecognizer.recognize(url)
  })
  .add('router | lookup static route', function () {
    router(req, null, noop)
  })
  .add('server-router | lookup static route', function () {
    serverRouter.match(req, null)
  })
  .add('koa-router | lookup static route', function () {
    koaRouter.url(url)
  })
  .add('routr | lookup static route', function () {
    routr.getRoute(url)
  })
  .add('call | lookup static route', function () {
    callRouter.route('GET', url)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {})
  .run()
