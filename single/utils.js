'use strict'

function now () {
  var ts = process.hrtime()
  return (ts[0] * 1e3) + (ts[1] / 1e6)
}

function getOpsSec (ops, ms) {
  return Number(((ops * 1000) / ms).toFixed()).toLocaleString()
}

function print (name, time, ops) {
  console.log(name, getOpsSec(ops, now() - time), 'ops/sec')
}

function title (name) {
  console.log(`
${'='.repeat(name.length + 2)}
 ${name}
${'='.repeat(name.length + 2)}`)
}

module.exports = { now, getOpsSec, print, title }
