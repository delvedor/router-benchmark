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
*These benchmarks where taken under node v8.9.0, on a MacBook Pro Retina Late 2013 (i7, 16GB of RAM), measured in ops/sec.*

| framework       | all together | short static | static with same radix | dynamic route | mixed static dynamic | long static | wildcard    
|-----------------|--------------|--------------|------------------------|---------------|----------------------|-------------|------------
| koa-tree-router | 924,587      | 11,756,182   | 6,212,981              | 3,221,744     | 4,160,595            | 7,723,753   | 4,469,051
| trek-router     | 612,419      | 8,530,466    | 4,861,846              | 2,240,906     | 2,539,650            | 5,525,210   | 3,533,566
| *find-my-way*   | *525,798*    | *10,102,066* | *3,887,679*            | *1,637,929*   | *2,289,554*          | *5,403,719* | *3,037,119*
| server-router   | 215,779      | 2,500,623    | 2,404,634              | 1,102,154     | 1,094,229            | 1,555,080   | 924,381
| call            | 181,587      | 3,123,503    | 3,094,106              | 578,251       | 632,624              | 3,491,147   | 884,869
| koa-router      | 161,220      | 1,004,122    | 1,029,369              | 1,015,635     | 968,784              | 1,027,857   | 1,033,432
| routr           | 108,098      | 4,562,784    | 2,530,725              | 850,739       | 553,497              | 520,461     | 348,495
| express *       | 100,184      | 1,145,409    | 1,102,656              | 595,169       | 513,327              | 642,545     | 407,398
| router *        | 99,443       | 1,176,121    | 1,110,484              | 628,130       | 536,107              | 678,598     | 356,475

\* **includes handling**

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
