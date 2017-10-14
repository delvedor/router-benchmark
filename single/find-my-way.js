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
const operations = 1000000

routes.forEach(route => {
  router.on(route.method, route.url, noop)
})

console.time('short dynamic')
for (var i = 0; i < operations; i++) {
  router.find('GET', '/user/1234')
}
console.timeEnd('short dynamic')

console.time('mixed static dynamic')
for (var i = 0; i < operations; i++) {
  router.find('GET', '/event/abcd1234/comments')
}
console.timeEnd('mixed static dynamic')

console.time('short static')
for (var i = 0; i < operations; i++) {
  router.find('GET', '/status')
}
console.timeEnd('short static')

console.time('long static')
for (var i = 0; i < operations; i++) {
  router.find('GET', '/very/deeply/nested/route/hello/there')
}
console.timeEnd('long static')

console.time('all together')
for (var i = 0; i < operations; i++) {
  router.find('GET', '/user/1234')
  router.find('GET', '/status')
  router.find('GET', '/event/abcd1234/comments')
  router.find('GET', '/very/deeply/nested/route/hello/there')
}
console.timeEnd('all together')
