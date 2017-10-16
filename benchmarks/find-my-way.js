'use strict'

const { title, now, print, operations } = require('../utils')
const router = require('find-my-way')()

title('find-my-way benchmark')

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
  router.on(route.method, route.url, noop)
})

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/user/1234')
}
print('short dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/event/abcd1234/comments')
}
print('mixed static dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/status')
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/very/deeply/nested/route/hello/there')
}
print('long static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/static/index.html')
}
print('wildcard:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('GET', '/user/1234')
  router.find('GET', '/status')
  router.find('GET', '/event/abcd1234/comments')
  router.find('GET', '/very/deeply/nested/route/hello/there')
  router.find('GET', '/static/index.html')
}
print('all together:', time)
