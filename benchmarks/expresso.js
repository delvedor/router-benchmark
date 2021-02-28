'use strict'

const { title, now, print, operations } = require('../utils')
const router = require('expresso-router')()

title('expresso router benchmark')

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
  { method: 'GET', url: '/very/deeply/nested/route/hello/there' }
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
  router({ method: 'GET', url: '/user' }, null, noop)
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/user/comments' }, null, noop)
}
print('static with same radix:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/user/lookup/username/john' }, null, noop)
}
print('dynamic route:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/event/abcd1234/comments' }, null, noop)
}
print('mixed static dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router({ method: 'GET', url: '/very/deeply/nested/route/hello/there' }, null, noop)
}
print('long static:', time)
