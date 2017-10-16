'use strict'

const { title, now, print, operations } = require('../utils')
const router = require('server-router')()

title('server-router benchmark')

const routes = [
  { method: 'GET', url: '/user' },
  { method: 'GET', url: '/user/comments' },
  { method: 'GET', url: '/user/avatar' },
  { method: 'GET', url: '/user/lookup/username/:username' },
  { method: 'GET', url: '/user/lookup/email/:address' },
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
  router.route(route.method, route.url, noop)
})

time = now()
for (i = 0; i < operations; i++) {
  router.match({ method: 'GET', url: '/user' })
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.match({ method: 'GET', url: '/user/comments' })
}
print('static with same radix:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.match({ method: 'GET', url: '/user/lookup/username/john' })
}
print('dynamic route:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.match({ method: 'GET', url: '/event/abcd1234/comments' }, null)
}
print('mixed static dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.match({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null)
}
print('long static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.match({ method: 'GET', url: '/static/index.html' }, null)
}
print('wildcard:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.match({ method: 'GET', url: '/user' })
  router.match({ method: 'GET', url: '/user/comments' })
  router.match({ method: 'GET', url: '/user/lookup/username/john' })
  router.match({ method: 'GET', url: '/event/abcd1234/comments' }, null)
  router.match({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null)
  router.match({ method: 'GET', url: '/static/index.html' }, null)
}
print('all together:', time)
