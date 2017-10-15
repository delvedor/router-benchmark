'use strict'

const { title, now, print, operations } = require('./utils')
const router = require('router')()

title('router benchmark')

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

routes.forEach(route => {
  if (route.method === 'GET') {
    router.get(route.url, noop)
  } else {
    router.post(route.url, noop)
  }
})

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/user/1234' }, null, noop)
}
print('short dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
}
print('mixed static dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/status' }, null, noop)
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
}
print('long static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/static/index.html' }, null, noop)
}
print('wildcard:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/user/1234' }, null, noop)
  router({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
  router({ method: 'GET', url: '/status' }, null, noop)
  router({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
  router({ method: 'GET', url: '/static/index.html' }, null, noop)
}
print('all together:', time)
