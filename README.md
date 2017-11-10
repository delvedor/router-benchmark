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
- [trek-router](https://www.npmjs.com/package/trek-router)

This benchmarks aims to test only http routers, so the method handling should be included.  
Do you know other routers? [PR](https://github.com/delvedor/router-benchmark/pulls)! :D

<a name="results"></a>
## Results
*These benchmarks where taken under node v8.7.0, on a MacBook Pro Retina Late 2013 (i7, 16GB of RAM).*

```
=======================
 find-my-way benchmark
=======================
short static: 9,931,560 ops/sec
static with same radix: 4,601,484 ops/sec
dynamic route: 1,064,340 ops/sec
mixed static dynamic: 1,080,315 ops/sec
long static: 5,763,034 ops/sec
wildcard: 1,335,130 ops/sec
all together: 309,842 ops/sec

================
 call benchmark
================
short static: 2,491,401 ops/sec
static with same radix: 2,706,946 ops/sec
dynamic route: 483,521 ops/sec
mixed static dynamic: 503,713 ops/sec
long static: 3,033,847 ops/sec
wildcard: 697,979 ops/sec
all together: 147,164 ops/sec

===================
 express benchmark
===================
short static: 1,065,029 ops/sec
static with same radix: 1,057,056 ops/sec
dynamic route: 511,982 ops/sec
mixed static dynamic: 452,778 ops/sec
long static: 604,326 ops/sec
wildcard: 372,483 ops/sec
all together: 91,631 ops/sec

===============
 koa benchmark
===============
short static: 269,965 ops/sec
static with same radix: 268,550 ops/sec
dynamic route: 261,210 ops/sec
mixed static dynamic: 254,778 ops/sec
long static: 273,391 ops/sec
wildcard: 271,932 ops/sec
all together: 44,596 ops/sec

=================
 routr benchmark
=================
short static: 3,932,952 ops/sec
static with same radix: 2,108,153 ops/sec
dynamic route: 707,828 ops/sec
mixed static dynamic: 473,430 ops/sec
long static: 429,040 ops/sec
wildcard: 296,470 ops/sec
all together: 95,131 ops/sec

=========================
 server-router benchmark
=========================
short static: 468,729 ops/sec
static with same radix: 400,674 ops/sec
dynamic route: 279,790 ops/sec
mixed static dynamic: 288,617 ops/sec
long static: 262,922 ops/sec
wildcard: 307,438 ops/sec
all together: 52,897 ops/sec

==================
 router benchmark
==================
short static: 1,155,635 ops/sec
static with same radix: 1,087,020 ops/sec
dynamic route: 534,661 ops/sec
mixed static dynamic: 453,982 ops/sec
long static: 620,895 ops/sec
wildcard: 373,879 ops/sec
all together: 94,976 ops/sec
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
```
Then the following routes are tested:
```
short static: { method: 'GET', url: '/user' }
static with same radix: { method: 'GET', url: '/user/comments' }
dynamic route: { method: 'GET', url: '/user/lookup/username/john' }
mixed static dynamic: { method: 'GET', url: '/event/abcd1234/comments' },
long static: { method: 'GET', url: '/very/deeply/nested/route/hello/there' },
wildcard: { method: 'GET', url: '/static/index.html' }
all together: all the above at the same time
```
Every test is executed 1 million times, the time is taken with `process.hrtime()`, the final result is expressed in operations per second.

<a name="license"></a>
## License

[MIT](https://github.com/delvedor/router-benchmark/blob/master/LICENSE)

Copyright © 2017 Tomas Della Vedova
