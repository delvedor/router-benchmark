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
const operations = 1000000

routes.forEach(route => {
  if (route.method === 'GET') {
    router.get(route.url, noop)
  } else {
    router.post(route.url, noop)
  }
})

console.time('short dynamic')
for (var i = 0; i < operations; i++) {
  router.url('/user/1234')
}
console.timeEnd('short dynamic')

console.time('mixed static dynamic')
for (var i = 0; i < operations; i++) {
  router.url('/event/abcd1234/comments')
}
console.timeEnd('mixed static dynamic')

console.time('short static')
for (var i = 0; i < operations; i++) {
  router.url('/status')
}
console.timeEnd('short static')

console.time('long static')
for (var i = 0; i < operations; i++) {
  router.url('/very/deeply/nested/route/hello/there')
}
console.timeEnd('long static')

console.time('all together')
for (var i = 0; i < operations; i++) {
  router.url('/user/1234')
  router.url('/event/abcd1234/comments')
  router.url('/status')
  router.url('/very/deeply/nested/route/hello/there')
}
console.timeEnd('all together')
