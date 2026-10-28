import isChinese from '../src/is_chinese'
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

describe('isChinese', function () {
  it('isChinese should work with `includePunctuation=true`', function () {
    // full chinese
    assert.equal(isChinese('中国'), true);
    // chinese with some ascii
    assert.equal(isChinese('中国ss'), false)
    // full ascii
    assert.equal(isChinese('ss'), false)
    // uncommon chinese word: 𠮷
    assert.equal(isChinese("\uD842\uDFB7"), true)
    // chinese with english punctuation
    assert.equal(isChinese("中国?"), false)
    // chinese with chinese punctuation
    assert.equal(isChinese("你要吃什么吗？！"), true)
    // chinese with chinese punctuation
    assert.equal(isChinese('扁担宽，板凳长，扁担想绑在板凳上。'), true)
    // chinese with some ascii
    assert.equal(isChinese('ss扁担宽，板凳长，扁担想绑在板凳上。'), false)
    // chinese with some ascii
    assert.equal(isChinese('扁担宽，板凳长，扁担想绑在板凳上。ss'), false)
  })

  it('isChinese should work with `includePunctuation=false`', function () {
    assert.equal(isChinese('中国。', {includePunctuation: false}), false)
    assert.equal(isChinese('中国', {includePunctuation: false}), true);
  })
})
