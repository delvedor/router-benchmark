'use strict'

console.log('\nfind-my-way benchmark')
const router = require('find-my-way')()

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
  router.on(route.method, route.url, noop)
})

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/user/1234')
}
console.log('short dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/event/abcd1234/comments')
}
console.log('mixed static dynamic:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/status')
}
console.log('short static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/very/deeply/nested/route/hello/there')
}
console.log('long static:', getOperationsPerSecond(now() - time), 'ops/sec')

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/user/1234')
  router.find('GET', '/status')
  router.find('GET', '/event/abcd1234/comments')
  router.find('GET', '/very/deeply/nested/route/hello/there')
}
console.log('all together:', getOperationsPerSecond(now() - time), 'ops/sec')

function now () {
  var ts = process.hrtime()
  return (ts[0] * 1e3) + (ts[1] / 1e6)
}

function getOperationsPerSecond (ms) {
  return Number(((operations * 1000) / ms).toFixed()).toLocaleString()
}
