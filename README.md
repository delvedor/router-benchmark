# router-benchmark

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://travis-ci.org/delvedor/router-benchmark.svg?branch=master)](https://travis-ci.org/delvedor/router-benchmark)

Benchmark of the most commonly used http routers.

Tested routers:

- [find-my-way](https://github.com/delvedor/find-my-way)
- [call](https://github.com/hapijs/call)
- [express](https://www.npmjs.com/package/express)
- [koa-router](https://github.com/alexmingoia/koa-router)
- [koa-tree-router](https://github.com/steambap/koa-tree-router)
- [router](https://github.com/pillarjs/router)
- [routr](https://github.com/yahoo/routr)
- [server-router](https://github.com/yoshuawuyts/server-router)
- [trek-router](https://www.npmjs.com/package/trek-router)
- [expresso](https://www.npmjs.com/package/expresso-router)

This benchmarks aims to test only http routers, so the method handling should be included.  
Do you know other routers? [PR](https://github.com/delvedor/router-benchmark/pulls)! :D

<a name="results"></a>
## Results
*These benchmarks where taken under node v8.9.0, on a MacBook Pro Retina Late 2013 (i7, 16GB of RAM).*

```
=======================
 find-my-way benchmark
=======================
short static: 10,102,066 ops/sec
static with same radix: 3,887,679 ops/sec
dynamic route: 1,637,929 ops/sec
mixed static dynamic: 2,289,554 ops/sec
long static: 5,403,719 ops/sec
wildcard: 3,037,119 ops/sec
all together: 525,798 ops/sec

================
 call benchmark
================
short static: 3,123,503 ops/sec
static with same radix: 3,094,106 ops/sec
dynamic route: 578,251 ops/sec
mixed static dynamic: 632,624 ops/sec
long static: 3,491,147 ops/sec
wildcard: 884,869 ops/sec
all together: 181,587 ops/sec

================================================
 express benchmark (WARNING: includes handling)
================================================
short static: 1,145,409 ops/sec
static with same radix: 1,102,656 ops/sec
dynamic route: 595,169 ops/sec
mixed static dynamic: 513,327 ops/sec
long static: 642,545 ops/sec
wildcard: 407,398 ops/sec
all together: 100,184 ops/sec

======================
 koa-router benchmark
======================
short static: 1,004,122 ops/sec
static with same radix: 1,029,369 ops/sec
dynamic route: 1,015,635 ops/sec
mixed static dynamic: 968,784 ops/sec
long static: 1,027,857 ops/sec
wildcard: 1,033,432 ops/sec
all together: 161,220 ops/sec

===========================
 koa-tree-router benchmark
===========================
short static: 11,756,182 ops/sec
static with same radix: 6,212,981 ops/sec
dynamic route: 3,221,744 ops/sec
mixed static dynamic: 4,160,595 ops/sec
long static: 7,723,753 ops/sec
wildcard: 4,469,051 ops/sec
all together: 924,587 ops/sec

===============================================
 router benchmark (WARNING: includes handling)
===============================================
short static: 1,176,121 ops/sec
static with same radix: 1,110,484 ops/sec
dynamic route: 628,130 ops/sec
mixed static dynamic: 536,107 ops/sec
long static: 678,598 ops/sec
wildcard: 356,475 ops/sec
all together: 99,443 ops/sec

=================
 routr benchmark
=================
short static: 4,562,784 ops/sec
static with same radix: 2,530,725 ops/sec
dynamic route: 850,739 ops/sec
mixed static dynamic: 553,497 ops/sec
long static: 520,461 ops/sec
wildcard: 348,495 ops/sec
all together: 108,098 ops/sec

=========================
 server-router benchmark
=========================
short static: 2,500,623 ops/sec
static with same radix: 2,404,634 ops/sec
dynamic route: 1,102,154 ops/sec
mixed static dynamic: 1,094,229 ops/sec
long static: 1,555,080 ops/sec
wildcard: 924,381 ops/sec
all together: 215,779 ops/sec

=======================
 trek-router benchmark
=======================
short static: 8,530,466 ops/sec
static with same radix: 4,861,846 ops/sec
dynamic route: 2,240,906 ops/sec
mixed static dynamic: 2,539,650 ops/sec
long static: 5,525,210 ops/sec
wildcard: 3,533,566 ops/sec
all together: 612,419 ops/sec
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

<a name="features"></a>
## Router features
| Router | Framework independent    | Decode URI    | Querystring handling   |  Regex route support | Multi-parametric route support |  Max parameter length |
| :------------ | :------------ | :------------ | :--------------------- | :------------------- |:------------------------------ |:--------------------- |
| `find-my-way` | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; | &#10003; |
| `call` | &#10003;  | &#10003; | &#10007; | ? | ? | ? |
| `express` | &#10007;  | &#10003; | &#10003; | &#10003; | &#10003; | &#10007; |
| `koa-router` | &#10007;  | &#10007; | &#10007; | &#10003; | &#10003; | &#10007; |
| `koa-tree-router` | &#10007; | &#10007; | &#10007; | &#10007; | &#10007; | &#10007;  |
| `router` | &#10003;  | &#10003; | &#10003; | &#10003; | &#10003; | &#10007; |
| `routr` | &#10003; | &#10003; | &#10003; | &#10007; | &#10007; | &#10007; |
| `server-router` | &#10003; | &#10003; | &#10007; | &#10007;| &#10007; | &#10007; |
| `trek-router` | &#10007; | &#10007; | &#10007; | &#10007; | &#10007; | &#10007; |

*Did you find incorrect data in the above table? Please send a pr!*

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

<a name="todo"></a>
### TODO:
- [ ] Add a list of the supported features by every router

<a name="license"></a>
## License

[MIT](https://github.com/delvedor/router-benchmark/blob/master/LICENSE)

Copyright © 2017 Tomas Della Vedova
