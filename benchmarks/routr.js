'use strict'

const { title, now, print, operations } = require('../utils')
const Routr = require('routr')

title('routr benchmark')

const router = new Routr([
  { name: 'first', method: 'get', path: '/user/:id' },
  { name: 'second', method: 'post', path: '/user/:id' },
  { name: 'third', method: 'get', path: '/event/:id' },
  { name: 'fourth', method: 'get', path: '/event/:id/comments' },
  { name: 'fifth', method: 'post', path: '/event/:id/comment' },
  { name: 'sixth', method: 'get', path: '/map/:location/events' },
  { name: 'seventh', method: 'get', path: '/status' },
  { name: 'eighth', method: 'get', path: '/very/deeply/nested/route/hello/there' },
  { name: 'ninth', method: 'get', path: '/static/*' }
])

var i = 0
var time = 0

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/user/1234', { method: 'GET' })
}
print('short dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/event/abcd1234/comments', { method: 'GET' })
}
print('mixed static dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/status', { method: 'GET' })
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/very/deeply/nested/route/hello/there', { method: 'GET' })
}
print('long static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/static/index.html', { method: 'GET' })
}
print('wildcard:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/user/1234', { method: 'GET' })
  router.getRoute('/status', { method: 'GET' })
  router.getRoute('/event/abcd1234/comments', { method: 'GET' })
  router.getRoute('/very/deeply/nested/route/hello/there', { method: 'GET' })
  router.getRoute('/static/index.html', { method: 'GET' })
}
print('all together:', time)
