[![Build Status](https://travis-ci.org/alsotang/is-chinese.svg?branch=master)](https://travis-ci.org/alsotang/is-chinese)

JS 中文字符串判断（根据 unicode 编码区间判断）

Determine if a string is all Chinese(based on unicode range)

## install

`$ npm install is-chinese`

## description

Chinese range is based on: https://en.wikipedia.org/wiki/CJK_Unified_Ideographs

## example

```js
var isChinese = require('is-chinese')
isChinese('中国').should.true();
isChinese('中国ss').should.false();
isChinese('ss').should.false();
isChinese("\uD842\uDFB7").should.true();
```

## benchmark

Node v15.12.0

MacBook Pro (15-inch, 2018)

```
isChinese("扁担宽，板凳长，扁担想绑在板凳上。") x 5,490,626 ops/sec ±0.72% (88 runs sampled)
isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。") x 33,357,975 ops/sec ±1.84% (88 runs sampled)
isChinese("扁担宽，板凳长，扁担想绑在板凳上。ss") x 11,268,687 ops/sec ±1.71% (84 runs sampled)
isChinese(chars1000) true x 109,415 ops/sec ±1.82% (88 runs sampled)
isChinese(chars1001) false x 281,900 ops/sec ±0.77% (87 runs sampled)
```

## license

MIT
