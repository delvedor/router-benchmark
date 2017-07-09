# router-benchmark

Benchmark of the most commonly used routers agains [`find-my-way`](https://github.com/delvedor/find-my-way):

Tested routers:
- [call](https://github.com/hapijs/call)
- [routr](https://github.com/yahoo/routr)
- [koa-router](https://github.com/alexmingoia/koa-router)
- [route-recognizer](https://github.com/tildeio/route-recognizer)
- [router](https://github.com/pillarjs/router)
- [server-router](https://github.com/yoshuawuyts/server-router)

Do you know other routers? [PR](https://github.com/delvedor/router-benchmark/pulls)! :D

<a name="results"></a>
## Results
**Static**
```
find-my-way | lookup static route x 8,388,886 ops/sec ±0.99% (91 runs sampled)
route-recognizer | lookup static route x 159,298 ops/sec ±1.02% (92 runs sampled)
router | lookup static route x 288,125 ops/sec ±31.18% (61 runs sampled)
server-router | lookup static route x 397,043 ops/sec ±0.76% (90 runs sampled)
koa-router | lookup static route x 298,733 ops/sec ±1.04% (87 runs sampled)
routr | lookup static route x 2,937,684 ops/sec ±1.00% (89 runs sampled)
call | lookup static route x 126,052 ops/sec ±0.88% (90 runs sampled)
```

**Dynamic**
```
find-my-way | lookup dynamic route x 980,343 ops/sec ±1.07% (89 runs sampled)
route-recognizer | lookup dynamic route x 141,052 ops/sec ±1.12% (91 runs sampled)
router | lookup dynamic route x 236,862 ops/sec ±10.50% (76 runs sampled)
server-router | lookup dynamic route x 343,165 ops/sec ±0.83% (92 runs sampled)
koa-router | lookup dynamic route x 291,881 ops/sec ±0.84% (90 runs sampled)
routr | lookup dynamic route x 1,015,063 ops/sec ±0.87% (85 runs sampled)
call | lookup dynamic route x 117,969 ops/sec ±0.94% (85 runs sampled)
```

**Wildcard**
```
find-my-way | lookup wildcard route x 3,643,882 ops/sec ±0.85% (85 runs sampled)
route-recognizer | lookup wildcard route x 157,353 ops/sec ±1.02% (93 runs sampled)
router | lookup wildcard route x 211,370 ops/sec ±26.38% (64 runs sampled)
server-router | lookup wildcard route x 344,806 ops/sec ±0.86% (91 runs sampled)
koa-router | lookup wildcard route x 302,852 ops/sec ±1.04% (85 runs sampled)
routr | lookup wildcard route x 1,422,781 ops/sec ±0.81% (88 runs sampled)
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
