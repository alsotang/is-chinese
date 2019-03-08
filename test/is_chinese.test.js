var isChinese = require('..')

describe('test/is_chinese.test.js', function () {
  it('isChinese should work', function () {
    isChinese('中国').should.true();
    isChinese('中国ss').should.false();
    isChinese('ss').should.false();
    isChinese("\uD842\uDFB7").should.true();
    isChinese("中国?").should.false();
    isChinese("你要吃什么吗？！").should.true();

    isChinese('扁担宽，板凳长，扁担想绑在板凳上。').should.true();
    isChinese('ss扁担宽，板凳长，扁担想绑在板凳上。').should.false()
  })
})
