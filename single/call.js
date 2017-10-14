'use strict'

console.log('\ncall benchmark')
const call = require('call')
const router = new call.Router()

const routes = [
  { method: 'GET', path: '/user/{id}' },
  { method: 'POST', path: '/user/{id}' },
  { method: 'GET', path: '/event/{id}' },
  { method: 'GET', path: '/event/{id}/comments' },
  { method: 'POST', path: '/event/{id}/comment' },
  { method: 'GET', path: '/map/{location}/events' },
  { method: 'GET', path: '/status' },
  { method: 'GET', path: '/very/deeply/nested/route/hello/there' }
]

function noop () {}
var i = 0
var time = 0
const operations = 1000000

routes.forEach(route => {
  router.add(route, noop)
})

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/user/1234')
}
console.log('short dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/event/abcd1234/comments')
}
console.log('mixed static dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/status')
}
console.log('short static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/very/deeply/nested/route/hello/there')
}
console.log('long static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/user/1234')
  router.route('get', '/status')
  router.route('get', '/event/abcd1234/comments')
  router.route('get', '/very/deeply/nested/route/hello/there')
}
console.log('all together:', getOperationsPerSecond(now() - time), 'ops/sec')

function now () {
  var ts = process.hrtime()
  return (ts[0] * 1e3) + (ts[1] / 1e6)
}

function getOperationsPerSecond (ms) {
  return Number(((operations * 1000) / ms).toFixed()).toLocaleString()
}
