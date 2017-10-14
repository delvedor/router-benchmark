# router-benchmark

Benchmark of the most commonly used routers agains [`find-my-way`](https://github.com/delvedor/find-my-way):

Tested routers:
- [call](https://github.com/hapijs/call)
- [routr](https://github.com/yahoo/routr)
- [koa-router](https://github.com/alexmingoia/koa-router)
- [route-recognizer](https://github.com/tildeio/route-recognizer) *(http methods not supported)*
- [router](https://github.com/pillarjs/router)
- [server-router](https://github.com/yoshuawuyts/server-router)
- [express](https://www.npmjs.com/package/express)
- [barista](https://github.com/kieran/barista)
- [radix-router](https://github.com/charlieduong94/radix-router) *(http methods not supported)*

Do you know other routers? [PR](https://github.com/delvedor/router-benchmark/pulls)! :D

<a name="results"></a>
## Results
*These benchmarks where taken under node v8.6.0, on a MacBook Pro Retina Late 2013 (i7, 16GB of RAM).*

**Static**
```
find-my-way | lookup static route x 7,319,587 ops/sec ±0.87% (94 runs sampled)
find-my-way | find static route x 9,318,794 ops/sec ±0.80% (93 runs sampled)
route-recognizer | lookup static route x 347,907 ops/sec ±1.39% (87 runs sampled)
router | lookup static route x 171,676 ops/sec ±13.74% (43 runs sampled)
server-router | lookup static route x 149,662 ops/sec ±7.25% (54 runs sampled)
koa-router | lookup static route x 223,048 ops/sec ±6.17% (63 runs sampled)
routr | lookup static route x 710,330 ops/sec ±7.20% (78 runs sampled)
call | lookup static route x 851,931 ops/sec ±5.76% (75 runs sampled)
express | lookup static route x 108,541 ops/sec ±67.79% (36 runs sampled)
barista | lookup static route x 196,569 ops/sec ±8.99% (52 runs sampled)
radix-router | lookup static route x 43,314,334 ops/sec ±7.12% (51 runs sampled)
```

**Dynamic**
```
find-my-way | lookup dynamic route x 1,652,982 ops/sec ±0.67% (93 runs sampled)
find-my-way | find dynamic route x 1,775,199 ops/sec ±0.75% (89 runs sampled)
route-recognizer | lookup dynamic route x 267,608 ops/sec ±0.85% (92 runs sampled)
router | lookup dynamic route x 150,722 ops/sec ±12.77% (49 runs sampled)
server-router | lookup dynamic route x 151,234 ops/sec ±5.52% (70 runs sampled)
koa-router | lookup dynamic route x 224,508 ops/sec ±6.68% (64 runs sampled)
routr | lookup dynamic route x 537,546 ops/sec ±3.21% (43 runs sampled)
call | lookup dynamic route x 345,810 ops/sec ±4.29% (44 runs sampled)
express | lookup dynamic route x 133,913 ops/sec ±37.10% (44 runs sampled)
barista | lookup dynamic route x 46,270 ops/sec ±97.61% (70 runs sampled)
radix-router | lookup dynamic route x 2,188,301 ops/sec ±5.21% (63 runs sampled)
```

**Wildcard**
```
find-my-way | lookup dynamic route x 1,552,982 ops/sec ±0.67% (93 runs sampled)
find-my-way | find dynamic route x 1,675,199 ops/sec ±0.75% (89 runs sampled)
route-recognizer | lookup dynamic route x 267,608 ops/sec ±0.85% (92 runs sampled)
router | lookup dynamic route x 150,722 ops/sec ±12.77% (49 runs sampled)
server-router | lookup dynamic route x 151,234 ops/sec ±5.52% (70 runs sampled)
koa-router | lookup dynamic route x 224,508 ops/sec ±6.68% (64 runs sampled)
routr | lookup dynamic route x 537,546 ops/sec ±3.21% (43 runs sampled)
call | lookup dynamic route x 345,810 ops/sec ±4.29% (44 runs sampled)
express | lookup dynamic route x 133,913 ops/sec ±37.10% (44 runs sampled)
barista | lookup dynamic route x 46,270 ops/sec ±97.61% (70 runs sampled)
radix-router | lookup dynamic route x 2,188,301 ops/sec ±5.21% (63 runs sampled)
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

[MIT](https://github.com/delvedor/router-benchmark/blob/master/LICENSE)

Copyright © 2017 Tomas Della Vedova
