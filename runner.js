'use strict'

const fs = require('fs')
const routes = require('./routes.json')
const Benchmark = require('benchmark')
const chalk = require('chalk')

const suites = {}
function noop () {}

const random = [];

for(const route of routes){
  if(route.path.indexOf('{') > -1){
    random.push({
      ...route,
      path: route.path.replace(/{([A-z]+)}/,'$1')
    });

    for(let i = 0; i < 10; i+= 1){
      // produce random path names to introduce performance degradation on misses
      const rewrite = {
        ...route,
        path: route.path.replace(/{([A-z]+)}/,`$1${Math.floor(Math.random() * 10000)}`),
        suite: `${route.suite} (404)`
      };

      if(i === 0 && route.suite){
        // run a 404 test suite
        rewrite.suite = `${route.suite} (404)`;
      }else{
        delete rewrite.suite;
      }
      
      random.push(rewrite);
    }
  }else{
    random.push(route);
  }
}

console.log(`\nRegistering ${random.length} routes for each library.`);

fs.readdirSync('./libraries').forEach((f) => {
  const library = require(`./libraries/${f}`)

  if (library.name) {
    library.registerRoutes(random, noop)

    for (const route of random.filter(r => !!r.suite)) {
      if (!suites[route.suite]) {
        suites[route.suite] = new Benchmark.Suite()
      }

      suites[route.suite].add(library.name, function () {
        library.get(route.test || route.path, noop)
      })
    }
  }
})

const indent = 10

for (const suiteName in suites) {
  suites[suiteName]
    .on('start', function () {
      console.log(`\nBenchmarking: ${charl.bold(suiteName)}`)
    })
    .on('cycle', function (event) {
      console.log(`\t${chalk.gray.italic(String(event.target))}`)
    })
    .on('complete', function () {
      const name = this.filter('fastest').map('name')

      console.log(chalk.bold.green(`WINNER: ${name}`.padStart(indent)))
    })
    .run()
}
