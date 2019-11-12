'use strict'

const { title, now, print, operations } = require('../utils')
const Router = require('url-router')

title('url-router benchmark')

const router = new Router(
  ['/user', 1],
  ['/user/comments', 1],
  ['/user/avatar', 1],
  ['/user/lookup/username/:username', 1],
  ['/user/lookup/email/:address', 1],
  ['/event/:id', 1],
  ['/event/:id/comments', 1],
  ['/event/:id/comment', 1],
  ['/map/:location/events', 1],
  ['/status', 1],
  ['/very/deeply/nested/route/hello/there', 1],
  ['/static/(.*)', 1]
)

var i = 0
var time = 0

time = now()
for (i = 0; i < operations; i++) {
  router.find('/user')
}
print('short static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('/user/comments')
}
print('static with same radix:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('/user/lookup/username/john')
}
print('dynamic route:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('/event/abcd1234/comments')
}
print('mixed static dynamic:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('/very/deeply/nested/route/hello/there')
}
print('long static:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('/static/index.html')
}
print('wildcard:', time)

time = now()
for (i = 0; i < operations; i++) {
  router.find('/user')
  router.find('/user/comments')
  router.find('/user/lookup/username/john')
  router.find('/event/abcd1234/comments')
  router.find('/very/deeply/nested/route/hello/there')
  router.find('/static/index.html')
}
print('all together:', time)
