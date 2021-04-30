const isChinese = require('..')
const chai = require('chai')
const assert = chai.assert;


describe('test/is_chinese.test.js', function () {
  it('isChinese should work', function () {
    assert.isTrue(isChinese('中国'));
    assert.isFalse(isChinese('中国ss'))
    assert.isFalse(isChinese('ss'))
    assert.isTrue(isChinese("\uD842\uDFB7"))
    assert.isFalse(isChinese("中国?"))
    assert.isTrue(isChinese("你要吃什么吗？！"))
    assert.isTrue(isChinese('扁担宽，板凳长，扁担想绑在板凳上。'))
    assert.isFalse(isChinese('ss扁担宽，板凳长，扁担想绑在板凳上。'))
    assert.isFalse(isChinese('扁担宽，板凳长，扁担想绑在板凳上。ss'))
  })
})
