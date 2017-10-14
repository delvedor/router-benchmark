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
const operations = 1000000

routes.forEach(route => {
  router.add(route, noop)
})

console.time('short dynamic')
for (i = 0; i < operations; i++) {
  router.route('get', '/user/1234')
}
console.timeEnd('short dynamic')

console.time('mixed static dynamic')
for (i = 0; i < operations; i++) {
  router.route('get', '/event/abcd1234/comments')
}
console.timeEnd('mixed static dynamic')

console.time('short static')
for (i = 0; i < operations; i++) {
  router.route('get', '/status')
}
console.timeEnd('short static')

console.time('long static')
for (i = 0; i < operations; i++) {
  router.route('get', '/very/deeply/nested/route/hello/there')
}
console.timeEnd('long static')

console.time('all together')
for (i = 0; i < operations; i++) {
  router.route('get', '/user/1234')
  router.route('get', '/status')
  router.route('get', '/event/abcd1234/comments')
  router.route('get', '/very/deeply/nested/route/hello/there')
}
console.timeEnd('all together')
