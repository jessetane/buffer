var BrowserBuffer = require('../').Buffer // (this module)
var util = require('./util')
var suite = util.suite()

var string = 'asdf' + '\uD83D\uDC46' + '\uD83D\uDC47' + '\uD83D\uDC48' + '\uD83D\uDC49'

var browserBuffer = new BrowserBuffer(string, 'utf16le')
var nodeBuffer = new Buffer(string, 'utf16le')

suite
  .add('BrowserBuffer#readUtf16', function () {
    browserBuffer.toString('utf16le')
  })

if (!process.browser) suite
  .add('NodeBuffer#readUtf8', function () {
    nodeBuffer.toString('utf16le')
  })
