var isChinese = require('..')
var utils = require('../lib/utils')

describe('test/is_chinese.test.js', function () {

  describe('isChinese', function () {
    it('should work with `中国`', function () {
      isChinese('中国').should.true();
    })

    it('should not work with `中国ss`', function () {
      isChinese('中国ss').should.false();
    })

    it('should not work with `ss`', function () {
      isChinese('ss').should.false();
    })

    it('should work with "\uD842\uDFB7"', function () {
      isChinese("\uD842\uDFB7").should.true();
    })
  })
})