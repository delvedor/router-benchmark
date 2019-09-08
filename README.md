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
Benchmarking: short static
	trek-router x 29,084,721 ops/sec ±1.16% (89 runs sampled)
	call x 8,101,926 ops/sec ±1.78% (90 runs sampled)
	express x 2,057,472 ops/sec ±0.50% (92 runs sampled)
	find-my-way x 18,684,934 ops/sec ±0.68% (94 runs sampled)
	koa-router x 1,397,558 ops/sec ±0.97% (94 runs sampled)
	koa-tree-router x 25,772,662 ops/sec ±1.73% (85 runs sampled)
	road-runner x 41,907,464 ops/sec ±0.81% (92 runs sampled)
	router x 2,075,999 ops/sec ±0.96% (91 runs sampled)
	routr x 7,489,195 ops/sec ±0.67% (92 runs sampled)
	server-router x 1,784,795 ops/sec ±1.04% (93 runs sampled)
	trek-router x 15,362,734 ops/sec ±0.60% (93 runs sampled)
	trek-router x 3,908,636 ops/sec ±0.56% (92 runs sampled)
WINNER: road-runner

Benchmarking: static with same radix
	trek-router x 10,312,965 ops/sec ±0.40% (95 runs sampled)
	call x 7,635,973 ops/sec ±0.47% (94 runs sampled)
	express x 1,790,534 ops/sec ±0.42% (96 runs sampled)
	find-my-way x 5,918,374 ops/sec ±1.03% (92 runs sampled)
	koa-router x 1,400,501 ops/sec ±0.49% (93 runs sampled)
	koa-tree-router x 11,465,859 ops/sec ±0.39% (96 runs sampled)
	road-runner x 43,780,556 ops/sec ±0.52% (90 runs sampled)
	router x 1,839,910 ops/sec ±0.52% (93 runs sampled)
	routr x 3,318,231 ops/sec ±1.07% (91 runs sampled)
	server-router x 1,379,142 ops/sec ±0.53% (92 runs sampled)
	trek-router x 7,940,053 ops/sec ±0.55% (91 runs sampled)
	trek-router x 3,788,768 ops/sec ±0.73% (92 runs sampled)
WINNER: road-runner

Benchmarking: dynamic route
	trek-router x 4,173,267 ops/sec ±0.53% (92 runs sampled)
	call x 60,565 ops/sec ±0.63% (81 runs sampled)
	express x 892,780 ops/sec ±1.13% (92 runs sampled)
	find-my-way x 2,303,675 ops/sec ±1.43% (89 runs sampled)
	koa-router x 1,270,939 ops/sec ±1.40% (90 runs sampled)
	koa-tree-router x 4,688,382 ops/sec ±1.46% (91 runs sampled)
	road-runner x 3,766,962 ops/sec ±1.23% (90 runs sampled)
	router x 906,729 ops/sec ±0.99% (95 runs sampled)
	routr x 1,040,663 ops/sec ±1.01% (93 runs sampled)
	server-router x 693,511 ops/sec ±0.60% (91 runs sampled)
	trek-router x 3,488,445 ops/sec ±0.41% (97 runs sampled)
	trek-router x 2,947,177 ops/sec ±0.99% (94 runs sampled)
WINNER: koa-tree-router

Benchmarking: mixed static dynamic
	trek-router x 2,569,386 ops/sec ±0.85% (93 runs sampled)
	call x 52,842 ops/sec ±1.38% (88 runs sampled)
	express x 716,605 ops/sec ±0.89% (90 runs sampled)
	find-my-way x 2,706,745 ops/sec ±1.62% (90 runs sampled)
	koa-router x 1,248,532 ops/sec ±0.93% (89 runs sampled)
	koa-tree-router x 5,696,085 ops/sec ±1.43% (89 runs sampled)
	road-runner x 4,163,593 ops/sec ±1.43% (91 runs sampled)
	router x 681,619 ops/sec ±1.53% (89 runs sampled)
	routr x 679,791 ops/sec ±0.92% (91 runs sampled)
	server-router x 735,124 ops/sec ±0.72% (90 runs sampled)
	trek-router x 3,393,802 ops/sec ±3.52% (82 runs sampled)
	trek-router x 2,473,778 ops/sec ±3.05% (84 runs sampled)
WINNER: koa-tree-router

Benchmarking: long static
	trek-router x 5,729,271 ops/sec ±1.22% (90 runs sampled)
	call x 6,169,357 ops/sec ±1.32% (88 runs sampled)
	express x 948,074 ops/sec ±0.73% (95 runs sampled)
	find-my-way x 6,899,085 ops/sec ±0.94% (91 runs sampled)
	koa-router x 1,312,166 ops/sec ±0.86% (91 runs sampled)
	koa-tree-router x 12,145,194 ops/sec ±1.06% (90 runs sampled)
	road-runner x 46,533,260 ops/sec ±1.56% (91 runs sampled)
	router x 937,217 ops/sec ±1.23% (90 runs sampled)
	routr x 714,357 ops/sec ±1.13% (92 runs sampled)
	server-router x 747,147 ops/sec ±1.37% (92 runs sampled)
	trek-router x 9,089,000 ops/sec ±0.89% (92 runs sampled)
	trek-router x 3,485,596 ops/sec ±1.48% (89 runs sampled)
WINNER: road-runner

Benchmarking: wildcard
	trek-router x 2,477,202 ops/sec ±0.48% (97 runs sampled)
	call x 51,703 ops/sec ±0.65% (90 runs sampled)
	express x 555,571 ops/sec ±1.20% (94 runs sampled)
	find-my-way x 3,991,118 ops/sec ±0.75% (92 runs sampled)
	koa-router x 1,316,350 ops/sec ±1.15% (93 runs sampled)
	koa-tree-router x 6,852,081 ops/sec ±0.49% (96 runs sampled)
	road-runner x 5,701,261 ops/sec ±0.49% (91 runs sampled)
	router x 575,414 ops/sec ±1.32% (94 runs sampled)
	routr x 459,416 ops/sec ±1.15% (90 runs sampled)
	server-router x 768,627 ops/sec ±1.27% (93 runs sampled)
	trek-router x 5,519,168 ops/sec ±1.29% (92 runs sampled)
	trek-router x 2,960,875 ops/sec ±1.09% (88 runs sampled)
WINNER: koa-tree-router
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
