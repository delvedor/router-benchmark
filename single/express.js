'use strict'

const { title, now, print } = require('./utils')
const router = require('express/lib/router')()

title('express benchmark')

const routes = [
  { method: 'GET', url: '/user/:id' },
  { method: 'POST', url: '/user/:id' },
  { method: 'GET', url: '/event/:id' },
  { method: 'GET', url: '/event/:id/comments' },
  { method: 'POST', url: '/event/:id/comment' },
  { method: 'GET', url: '/map/:location/events' },
  { method: 'GET', url: '/status' },
  { method: 'GET', url: '/very/deeply/nested/route/hello/there' },
  { method: 'GET', url: '/static/*' }
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
print('short dynamic:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
}
print('mixed static dynamic:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/status' }, null, noop)
}
print('short static:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
}
print('long static:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/static/index.html' }, null, noop)
}
print('wildcard:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.handle({ method: 'GET', url: '/user/1234' }, null, noop)
  router.handle({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
  router.handle({ method: 'GET', url: '/status' }, null, noop)
  router.handle({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
  router.handle({ method: 'GET', url: '/static/index.html' }, null, noop)
}
print('all together:', time, operations)
