# router-benchmark

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://travis-ci.org/delvedor/router-benchmark.svg?branch=master)](https://travis-ci.org/delvedor/router-benchmark)

Benchmark of the most commonly used http routers.

Tested routers:
- [find-my-way](https://github.com/delvedor/find-my-way)
- [call](https://github.com/hapijs/call)
- [routr](https://github.com/yahoo/routr)
- [koa-router](https://github.com/alexmingoia/koa-router)
- [router](https://github.com/pillarjs/router)
- [server-router](https://github.com/yoshuawuyts/server-router)
- [express](https://www.npmjs.com/package/express)

This benchmarks aims to test only http routers, so the method handling should be included.  
Do you know other routers? [PR](https://github.com/delvedor/router-benchmark/pulls)! :D

<a name="results"></a>
## Results
*These benchmarks where taken under node v8.6.0, on a MacBook Pro Retina Late 2013 (i7, 16GB of RAM).*

```
=======================
 find-my-way benchmark
=======================
short dynamic: 2,148,584 ops/sec
mixed static dynamic: 1,382,992 ops/sec
short static: 6,665,685 ops/sec
long static: 6,886,939 ops/sec
wildcard: 2,612,277 ops/sec
all together: 569,705 ops/sec

================
 call benchmark
================
short dynamic: 1,016,059 ops/sec
mixed static dynamic: 570,699 ops/sec
short static: 2,958,576 ops/sec
long static: 2,938,108 ops/sec
wildcard: 580,286 ops/sec
all together: 169,676 ops/sec

===================
 express benchmark
===================
short dynamic: 706,210 ops/sec
mixed static dynamic: 577,051 ops/sec
short static: 848,192 ops/sec
long static: 725,844 ops/sec
wildcard: 421,825 ops/sec
all together: 117,530 ops/sec

===============
 koa benchmark
===============
short dynamic: 297,187 ops/sec
mixed static dynamic: 298,765 ops/sec
short static: 303,449 ops/sec
long static: 306,759 ops/sec
wildcard: 305,490 ops/sec
all together: 59,996 ops/sec

=================
 routr benchmark
=================
short dynamic: 1,373,274 ops/sec
mixed static dynamic: 661,407 ops/sec
short static: 612,664 ops/sec
long static: 505,629 ops/sec
wildcard: 343,636 ops/sec
all together: 108,741 ops/sec

=========================
 server-router benchmark
=========================
short dynamic: 367,919 ops/sec
mixed static dynamic: 341,177 ops/sec
short static: 564,836 ops/sec
long static: 302,930 ops/sec
wildcard: 352,548 ops/sec
all together: 73,521 ops/sec

==================
 router benchmark
==================
short dynamic: 733,509 ops/sec
mixed static dynamic: 600,667 ops/sec
short static: 832,272 ops/sec
long static: 715,656 ops/sec
wildcard: 447,905 ops/sec
all together: 118,799 ops/sec
```

### Run the benchmarks
Do you wan to run the benchmarks by yourself?  
Run the following:
```bash
git clone https://github.com/delvedor/router-benchmark
cd router-benchmark
npm i
npm start
```

<a name="how"></a>
## How the benchmark is taken

To emulate a real world situation every router registers the following routes:
```
{ method: 'GET', url: '/user/:id' },
{ method: 'POST', url: '/user/:id' },
{ method: 'GET', url: '/event/:id' },
{ method: 'GET', url: '/event/:id/comments' },
{ method: 'POST', url: '/event/:id/comment' },
{ method: 'GET', url: '/map/:location/events' },
{ method: 'GET', url: '/status' },
{ method: 'GET', url: '/very/deeply/nested/route/hello/there' },
{ method: 'GET', url: '/static/*' }
```
Then the following routes are tested:
```
short dynamic: { method: 'GET', url: '/user/1234' },
mixed static dynamic: { method: 'GET', url: '/event/abcd1234/comments' },
short static: { method: 'GET', url: '/status' },
long static: { method: 'GET', url: '/very/deeply/nested/route/hello/there' },
wildcard: { method: 'GET', url: '/static/index.html' }
all together: all the above at the same time
```
Every test is executed 1 million times, the time is taken with `process.hrtime()`, the final result is expressed in operations per second.

<a name="license"></a>
## License

[MIT](https://github.com/delvedor/router-benchmark/blob/master/LICENSE)

Copyright © 2017 Tomas Della Vedova
