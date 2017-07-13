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
find-my-way | lookup static route x 8,274,826 ops/sec ±0.99% (91 runs sampled)
route-recognizer | lookup static route x 133,771 ops/sec ±1.16% (84 runs sampled)
router | lookup static route x 270,335 ops/sec ±15.58% (65 runs sampled)
server-router | lookup static route x 233,201 ops/sec ±57.56% (81 runs sampled)
koa-router | lookup static route x 251,888 ops/sec ±0.88% (86 runs sampled)
routr | lookup static route x 2,474,440 ops/sec ±0.99% (85 runs sampled)
call | lookup static route x 104,846 ops/sec ±0.99% (84 runs sampled)
```

**Dynamic**
```
find-my-way | lookup dynamic route x 2,006,576 ops/sec ±0.80% (85 runs sampled)
route-recognizer | lookup dynamic route x 116,785 ops/sec ±1.39% (85 runs sampled)
router | lookup dynamic route x 190,412 ops/sec ±16.75% (62 runs sampled)
server-router | lookup dynamic route x 291,046 ops/sec ±1.12% (85 runs sampled)
koa-router | lookup dynamic route x 255,698 ops/sec ±0.95% (86 runs sampled)
routr | lookup dynamic route x 984,125 ops/sec ±0.80% (85 runs sampled)
call | lookup dynamic route x 101,786 ops/sec ±1.12% (88 runs sampled)
```

**Wildcard**
```
find-my-way | lookup wildcard route x 3,723,882 ops/sec ±0.85% (85 runs sampled)
route-recognizer | lookup wildcard route x 133,637 ops/sec ±1.42% (85 runs sampled)
router | lookup wildcard route x 199,073 ops/sec ±14.98% (66 runs sampled)
server-router | lookup wildcard route x 297,513 ops/sec ±0.98% (87 runs sampled)
koa-router | lookup wildcard route x 260,644 ops/sec ±0.93% (86 runs sampled)
routr | lookup wildcard route x 1,160,187 ops/sec ±0.86% (83 runs sampled)
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
