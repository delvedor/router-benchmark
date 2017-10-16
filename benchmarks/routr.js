'use strict'

const { title, now, print, operations } = require('../utils')
const Routr = require('routr')

title('routr benchmark')

const router = new Routr([
  { name: 'first', method: 'GET', path: '/user' },
  { name: 'second', method: 'GET', path: '/user/comments' },
  { name: 'third', method: 'GET', path: '/user/avatar' },
  { name: 'fourth', method: 'GET', path: '/user/lookup/username/:username' },
  { name: 'fifth', method: 'GET', path: '/user/lookup/email/:address' },
  { name: 'sixth', method: 'get', path: '/event/:id' },
  { name: 'seventh', method: 'get', path: '/event/:id/comments' },
  { name: 'eighth', method: 'post', path: '/event/:id/comment' },
  { name: 'ninth', method: 'get', path: '/map/:location/events' },
  { name: 'tenth', method: 'get', path: '/status' },
  { name: 'eleventh', method: 'get', path: '/very/deeply/nested/route/hello/there' },
  { name: 'twelfth', method: 'get', path: '/static/*' }
])

var i = 0
var time = 0

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/user', { method: 'GET' })
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/user/comments', { method: 'GET' })
}
print('static with same radix:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/user/lookup/username/john', { method: 'GET' })
}
print('dynamic route:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.getRoute('/event/abcd1234/comments', { method: 'GET' })
}
print('mixed static dynamic:', time)

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
  router.getRoute('/user', { method: 'GET' })
  router.getRoute('/user/comments', { method: 'GET' })
  router.getRoute('/user/lookup/username/john', { method: 'GET' })
  router.getRoute('/event/abcd1234/comments', { method: 'GET' })
  router.getRoute('/very/deeply/nested/route/hello/there', { method: 'GET' })
  router.getRoute('/static/index.html', { method: 'GET' })
}
print('all together:', time)
