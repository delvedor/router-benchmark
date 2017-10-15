'use strict'

const { fork } = require('child_process')
const { Queue } = require('./utils')

const benchmarks = [
  'find-my-way.js',
  'call.js',
  'express.js',
  'koa.js',
  'routr.js',
  'server-router.js'
]

const queue = new Queue()

benchmarks.forEach(file => {
  queue.add(runner.bind({ file }))
})

function runner (done) {
  const process = fork(this.file)
  process.on('close', done)
}
