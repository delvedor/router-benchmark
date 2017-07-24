'use strict'

const Benchmark = require('benchmark')
const suite = Benchmark.Suite()
const noop = () => {}
const req = { url: '/bench/mark', method: 'GET' }
const url = '/bench/:mark'

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
const express = require('express/lib/router')()
const wayfarer = require('wayfarer')()

findMyWay.on('GET', url, noop)
routeRecognizer.add([{ path: url, handler: noop }])
router.get(url, noop)
serverRouter.route('GET', url, noop)
koaRouter.get(url, noop)
callRouter.add({ method: 'GET', path: '/bench/{mark}' })
express.route(url).get(() => {})
wayfarer.on(url, noop)

suite
  .add('find-my-way | lookup dynamic route', function () {
    findMyWay.lookup(req, null)
  })
  .add('route-recognizer | lookup dynamic route', function () {
    routeRecognizer.recognize(req.url)
  })
  .add('router | lookup dynamic route', function () {
    router(req, null, noop)
  })
  .add('server-router | lookup dynamic route', function () {
    serverRouter.match(req, null)
  })
  .add('koa-router | lookup dynamic route', function () {
    koaRouter.url(req.url)
  })
  .add('routr | lookup dynamic route', function () {
    routr.getRoute(req.url)
  })
  .add('call | lookup dynamic route', function () {
    callRouter.route('GET', req.url)
  })
  .add('express | lookup dynamic route', function () {
    express.handle(req, null, noop)
  })
  .add('wayfarer | lookup dynamic route', function () {
    wayfarer(req.url)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {})
  .run()
