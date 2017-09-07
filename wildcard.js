'use strict'

const Benchmark = require('benchmark')
const suite = Benchmark.Suite()
const noop = () => {}
const req = { url: '/bench/mark', method: 'GET' }
const url = '*'

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
// const call = require('call')
// const callRouter = new call.Router()
const express = require('express/lib/router')()
const Barista = require('Barista').Router
const barista = new Barista()

findMyWay.on('GET', url, noop)
routeRecognizer.add([{ path: url, handler: noop }])
router.get(url, noop)
serverRouter.route('GET', url, noop)
koaRouter.get(url, noop)
// callRouter.add({ method: 'GET', path: '{params*}' })
express.route(url).get(() => {})
barista.get(`${url}name`, 'window.noop')

suite
  .add('find-my-way | lookup wildcard route', function () {
    findMyWay.lookup(req, null)
  })
  .add('route-recognizer | lookup wildcard route', function () {
    routeRecognizer.recognize(req.url)
  })
  .add('router | lookup wildcard route', function () {
    router(req, null, noop)
  })
  .add('server-router | lookup wildcard route', function () {
    serverRouter.match(req, null)
  })
  .add('koa-router | lookup wildcard route', function () {
    koaRouter.url(req.url)
  })
  .add('routr | lookup wildcard route', function () {
    routr.getRoute(req.url)
  })
  /* .add('call | lookup wildcard route', function () {
    callRouter.route('GET', req.url)
  }) */
  .add('express | lookup wildcard route', function () {
    express.handle(req, null, noop)
  })
  .add('barista | lookup wildcard route', function () {
    barista.first(req.url, req.method)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {})
  .run()
