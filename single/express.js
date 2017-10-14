'use strict'

console.log('\nexpress benchmark')
const router = require('express/lib/router')()

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
    router.route(route.url).get(noop)
  } else {
    router.route(route.url).post(noop)
  }
})

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/user/1234' }, null, noop)
}
console.log('short dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
}
console.log('mixed static dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/status' }, null, noop)
}
console.log('short static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
}
console.log('long static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/user/1234' }, null, noop)
  router.handle({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
  router.handle({ method: 'GET', url: '/status' }, null, noop)
  router.handle({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
}
console.log('all together:', getOperationsPerSecond(now() - time), 'ops/sec')

function now () {
  var ts = process.hrtime()
  return (ts[0] * 1e3) + (ts[1] / 1e6)
}

function getOperationsPerSecond (ms) {
  return Number(((operations * 1000) / ms).toFixed()).toLocaleString()
}
