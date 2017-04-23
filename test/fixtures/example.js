'use strict'

var assert = require('assert')

module.exports = function add (a, b) {
  console.assert(typeof a === 'number')
  assert(!isNaN(a))
  assert.equal(typeof b, 'number')
  assert.ok(!isNaN(b))
  return a + b
}
