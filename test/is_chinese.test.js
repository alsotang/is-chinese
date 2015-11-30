var isChinese = require('..')

describe('test/is_chinese.test.js', function () {
  it('should throw', function () {
    (function () {
      throw new Error()
    }).should.throw()
  })

  describe('es5 version', function () {
    it('should work with `中国`', function () {
      isChinese.es5('中国').should.true();
    })

    it('should not work with `中国ss`', function () {
      isChinese.es5('中国ss').should.false();
    })

    it('should not work with `ss`', function () {
      isChinese.es5('ss').should.false();
    })

    it('should not work with "\uD842\uDFB7"', function () {
      isChinese.es5("\uD842\uDFB7").should.false();
    })
  })

  describe('es6 version', function () {
    it('should work with `中国`', function () {
      isChinese.es6('中国').should.true();
    })

    it('should not work with `中国ss`', function () {
      isChinese.es6('中国ss').should.false();
    })

    it('should not work with `ss`', function () {
      isChinese.es6('ss').should.false();
    })

    it('should work with "\uD842\uDFB7"', function () {
      isChinese.es6("\uD842\uDFB7").should.true();
    })
  })

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
      isChinese("\uD842\uDFB7").should[process.version[1] == '0' ? 'false' : 'true']();
    })
  })
})