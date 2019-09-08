'use strict'

const fs = require('fs')
const routes = require('./routes.json')
const Benchmark = require('benchmark')
const chalk = require('chalk')

const suites = {}
function noop () {}

fs.readdirSync('./libraries').forEach((f) => {
  const library = require(`./libraries/${f}`)

  if (library.name) {
    library.registerRoutes(routes, noop)

    for (const route of routes.filter(r => !!r.suite)) {
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
      console.log(`\nBenchmarking: ${suiteName}`)
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
