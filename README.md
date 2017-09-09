# router-benchmark

Benchmark of the most commonly used routers agains [`find-my-way`](https://github.com/delvedor/find-my-way):

Tested routers:
- [call](https://github.com/hapijs/call)
- [routr](https://github.com/yahoo/routr)
- [koa-router](https://github.com/alexmingoia/koa-router)
- [route-recognizer](https://github.com/tildeio/route-recognizer)
- [router](https://github.com/pillarjs/router)
- [server-router](https://github.com/yoshuawuyts/server-router)
- [express](https://www.npmjs.com/package/express)
- [barista](https://kieran.github.io/barista)

Do you know other routers? [PR](https://github.com/delvedor/router-benchmark/pulls)! :D

<a name="results"></a>
## Results
*These benchmarks where taken under node v6.10.0, on a MacBook Pro Retina Late 2013 (i7, 16GB of RAM).*

**Static**
```
find-my-way | lookup static route x 8,284,312 ops/sec ±0.99% (91 runs sampled)
route-recognizer | lookup static route x 154,168 ops/sec ±1.13% (88 runs sampled)
router | lookup static route x 273,377 ops/sec ±27.23% (60 runs sampled)
server-router | lookup static route x 385,134 ops/sec ±1.20% (89 runs sampled)
koa-router | lookup static route x 304,621 ops/sec ±1.05% (88 runs sampled)
routr | lookup static route x 2,535,607 ops/sec ±1.10% (87 runs sampled)
call | lookup static route x 125,371 ops/sec ±0.97% (91 runs sampled)
express | lookup static route x 50,498 ops/sec ±98.59% (19 runs sampled)
```

**Dynamic**
```
find-my-way | lookup dynamic route x 2,647,488 ops/sec ±0.93% (89 runs sampled)
route-recognizer | lookup dynamic route x 140,526 ops/sec ±1.13% (89 runs sampled)
router | lookup dynamic route x 232,006 ops/sec ±11.61% (75 runs sampled)
server-router | lookup dynamic route x 340,602 ops/sec ±0.79% (92 runs sampled)
koa-router | lookup dynamic route x 296,380 ops/sec ±1.06% (85 runs sampled)
routr | lookup dynamic route x 1,100,265 ops/sec ±1.18% (89 runs sampled)
call | lookup dynamic route x 118,848 ops/sec ±0.73% (90 runs sampled)
express | lookup dynamic route x 116,762 ops/sec ±53.99% (41 runs sampled)
```

**Wildcard**
```
find-my-way | lookup wildcard route x 3,736,314 ops/sec ±0.87% (88 runs sampled)
route-recognizer | lookup wildcard route x 150,854 ops/sec ±1.11% (90 runs sampled)
router | lookup wildcard route x 232,003 ops/sec ±15.32% (67 runs sampled)
server-router | lookup wildcard route x 241,934 ops/sec ±58.42% (90 runs sampled)
koa-router | lookup wildcard route x 297,637 ops/sec ±1.03% (89 runs sampled)
routr | lookup wildcard route x 1,390,896 ops/sec ±0.90% (88 runs sampled)
express | lookup wildcard route x 48,479 ops/sec ±109.54% (16 runs sampled)
```

### Run the benchmarks
Do you wan to run the benchmarks by yourself?  
Run the following:
```bash
git clone https://github.com/delvedor/router-benchmark
cd router-benchmark
npm i
npm run all
```

<a name="license"></a>
## License

[MIT](https://github.com/delvedor/yaml-template/blob/master/LICENSE)

Copyright © 2017 Tomas Della Vedova
