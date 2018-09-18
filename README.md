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

This benchmarks aims to test only http routers, so the method handling should be included.  
Do you know other routers? [PR](https://github.com/delvedor/router-benchmark/pulls)! :D

<a name="results"></a>
## Results
*These benchmarks where taken under node v8.9.0, on a MacBook Pro Retina Late 2013 (i7, 16GB of RAM).*

```
=======================
 find-my-way benchmark
=======================
short static: 7,745,613 ops/sec
static with same radix: 3,118,823 ops/sec
dynamic route: 1,195,282 ops/sec
mixed static dynamic: 1,726,773 ops/sec
long static: 4,743,616 ops/sec
wildcard: 2,446,812 ops/sec
all together: 415,998 ops/sec

================
 call benchmark
================
short static: 3,244,884 ops/sec
static with same radix: 3,389,339 ops/sec
dynamic route: 617,024 ops/sec
mixed static dynamic: 636,191 ops/sec
long static: 3,776,016 ops/sec
wildcard: 899,892 ops/sec
all together: 188,688 ops/sec

================================================
 express benchmark (WARNING: includes handling)
================================================
short static: 1,037,162 ops/sec
static with same radix: 925,226 ops/sec
dynamic route: 522,694 ops/sec
mixed static dynamic: 470,980 ops/sec
long static: 581,354 ops/sec
wildcard: 427,984 ops/sec
all together: 98,499 ops/sec

======================
 koa-router benchmark
======================
short static: 916,500 ops/sec
static with same radix: 922,262 ops/sec
dynamic route: 888,385 ops/sec
mixed static dynamic: 851,606 ops/sec
long static: 907,456 ops/sec
wildcard: 877,657 ops/sec
all together: 146,153 ops/sec

===========================
 koa-tree-router benchmark
===========================
short static: 11,292,851 ops/sec
static with same radix: 5,488,497 ops/sec
dynamic route: 2,887,410 ops/sec
mixed static dynamic: 3,470,038 ops/sec
long static: 6,981,450 ops/sec
wildcard: 3,848,972 ops/sec
all together: 795,986 ops/sec

===============================================
 router benchmark (WARNING: includes handling)
===============================================
short static: 1,195,738 ops/sec
static with same radix: 1,112,308 ops/sec
dynamic route: 576,043 ops/sec
mixed static dynamic: 499,983 ops/sec
long static: 617,547 ops/sec
wildcard: 420,640 ops/sec
all together: 101,351 ops/sec

=================
 routr benchmark
=================
short static: 3,270,962 ops/sec
static with same radix: 1,766,199 ops/sec
dynamic route: 669,313 ops/sec
mixed static dynamic: 411,909 ops/sec
long static: 358,719 ops/sec
wildcard: 269,882 ops/sec
all together: 84,583 ops/sec

=========================
 server-router benchmark
=========================
short static: 2,708,700 ops/sec
static with same radix: 2,785,060 ops/sec
dynamic route: 1,217,104 ops/sec
mixed static dynamic: 1,130,491 ops/sec
long static: 1,755,331 ops/sec
wildcard: 970,524 ops/sec
all together: 223,977 ops/sec

=======================
 trek-router benchmark
=======================
short static: 8,075,302 ops/sec
static with same radix: 4,175,896 ops/sec
dynamic route: 1,584,014 ops/sec
mixed static dynamic: 1,965,050 ops/sec
long static: 6,213,978 ops/sec
wildcard: 3,019,820 ops/sec
all together: 487,037 ops/sec

===================
 trouter benchmark
===================
short static: 2,567,976 ops/sec
static with same radix: 1,770,110 ops/sec
dynamic route: 1,290,340 ops/sec
mixed static dynamic: 1,439,608 ops/sec
long static: 1,046,488 ops/sec
wildcard: 1,597,536 ops/sec
all together: 241,768 ops/sec
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
