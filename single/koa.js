'use strict'

const { title, now, print, operations } = require('./utils')
const KoaRouter = require('koa-router')
const router = new KoaRouter()

title('koa benchmark')

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
  router.url('/user/1234')
}
print('short dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.url('/event/abcd1234/comments')
}
print('mixed static dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.url('/status')
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.url('/very/deeply/nested/route/hello/there')
}
print('long static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.url('/static/index.html')
}
print('wildcard:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.url('/user/1234')
  router.url('/event/abcd1234/comments')
  router.url('/status')
  router.url('/very/deeply/nested/route/hello/there')
  router.url('/static/index.html')
}
print('all together:', time)
