'use strict'

const { title, now, print } = require('./utils')
const call = require('call')
const router = new call.Router()

title('call benchmark')

const routes = [
  { method: 'GET', path: '/user/{id}' },
  { method: 'POST', path: '/user/{id}' },
  { method: 'GET', path: '/event/{id}' },
  { method: 'GET', path: '/event/{id}/comments' },
  { method: 'POST', path: '/event/{id}/comment' },
  { method: 'GET', path: '/map/{location}/events' },
  { method: 'GET', path: '/status' },
  { method: 'GET', path: '/very/deeply/nested/route/hello/there' },
  { method: 'GET', path: '/static/{file*}' }
]

function noop () {}
var i = 0
var time = 0
const operations = 1000000

routes.forEach(route => {
  router.add(route, noop)
})

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/user/1234')
}
print('short dynamic:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/event/abcd1234/comments')
}
print('mixed static dynamic:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/status')
}
print('short static:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/very/deeply/nested/route/hello/there')
}
print('long static:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/static/index.html')
}
print('wildcard:', time, operations)

time = now()
for (i = 0; i < operations; i++) {
  router.route('get', '/user/1234')
  router.route('get', '/status')
  router.route('get', '/event/abcd1234/comments')
  router.route('get', '/very/deeply/nested/route/hello/there')
  router.route('get', '/static/index.html')
}
print('all together:', time, operations)
