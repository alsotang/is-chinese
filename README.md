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
isChinese("扁担宽，板凳长，扁担想绑在板凳上。") x 1,047,458 ops/sec ±0.49% (90 runs sampled)
isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。") x 3,836,192 ops/sec ±0.55% (89 runs sampled)
isChinese(chars1000) x 6,418 ops/sec ±0.58% (89 runs sampled)
```

## license

MIT
