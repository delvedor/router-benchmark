'use strict'

console.log('\nkoa benchmark')
const KoaRouter = require('koa-router')
const router = new KoaRouter()

const routes = [
  { method: 'GET', url: '/user/:id' },
  { method: 'POST', url: '/user/:id' },
  { method: 'GET', url: '/event/:id' },
  { method: 'GET', url: '/event/:id/comments' },
  { method: 'POST', url: '/event/:id/comment' },
  { method: 'GET', url: '/map/:location/events' },
  { method: 'GET', url: '/status' },
  { method: 'GET', url: '/very/deeply/nested/route/hello/there' }
]

function noop () {}
var i = 0
var time = 0
const operations = 1000000

routes.forEach(route => {
  if (route.method === 'GET') {
    router.get(route.url, noop)
  } else {
    router.post(route.url, noop)
  }
})

time = now()
for (i = 0; i < operations; i++) {
  router.url('/user/1234')
}
console.log('short dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.url('/event/abcd1234/comments')
}
console.log('mixed static dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.url('/status')
}
console.log('long static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.url('/very/deeply/nested/route/hello/there')
}
console.log('long static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.url('/user/1234')
  router.url('/event/abcd1234/comments')
  router.url('/status')
  router.url('/very/deeply/nested/route/hello/there')
}
console.log('all together:', getOperationsPerSecond(now() - time), 'ops/sec')

function now () {
  var ts = process.hrtime()
  return (ts[0] * 1e3) + (ts[1] / 1e6)
}

function getOperationsPerSecond (ms) {
  return Number(((operations * 1000) / ms).toFixed()).toLocaleString()
}
