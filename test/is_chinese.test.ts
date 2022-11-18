import isChinese from '..'
import chai from 'chai'
const assert = chai.assert;

describe('test/is_chinese.test.js', function () {
  it('isChinese should work with `includePunctuation=true`', function () {
    // full chinese
    assert.isTrue(isChinese('中国'));
    // chinese with some ascii
    assert.isFalse(isChinese('中国ss'))
    // full ascii
    assert.isFalse(isChinese('ss'))
    // uncommon chinese word: 𠮷
    assert.isTrue(isChinese("\uD842\uDFB7"))
    // chinese with english punctuation
    assert.isFalse(isChinese("中国?"))
    // chinese with chinese punctuation
    assert.isTrue(isChinese("你要吃什么吗？！"))
    // chinese with chinese punctuation
    assert.isTrue(isChinese('扁担宽，板凳长，扁担想绑在板凳上。'))
    // chinese with some ascii
    assert.isFalse(isChinese('ss扁担宽，板凳长，扁担想绑在板凳上。'))
    // chinese with some ascii
    assert.isFalse(isChinese('扁担宽，板凳长，扁担想绑在板凳上。ss'))
  })

  it('isChinese should work with `includePunctuation=false`', function () {
    assert.isFalse(isChinese('中国。', {includePunctuation: false}))
    assert.isTrue(isChinese('中国', {includePunctuation: false}));
  })
})
