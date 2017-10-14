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
const operations = 1000000

routes.forEach(route => {
  if (route.method === 'GET') {
    router.route(route.url).get(noop)
  } else {
    router.route(route.url).post(noop)
  }
})

console.time('short dynamic')
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/user/1234' }, null, noop)
}
console.timeEnd('short dynamic')

console.time('mixed static dynamic')
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
}
console.timeEnd('mixed static dynamic')

console.time('short static')
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/status' }, null, noop)
}
console.timeEnd('short static')

console.time('long static')
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
}
console.timeEnd('long static')

console.time('all together')
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/user/1234' }, null, noop)
  router.handle({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
  router.handle({ method: 'GET', url: '/status' }, null, noop)
  router.handle({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
}
console.timeEnd('all together')
