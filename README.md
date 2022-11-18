[![Build Status](https://travis-ci.org/alsotang/is-chinese.svg?branch=master)](https://travis-ci.org/alsotang/is-chinese)

JS 中文字符串判断（根据 unicode 编码区间判断）

Determine whether a string is all Chinese(based on unicode range)

## install

`$ npm install is-chinese`

## description

Chinese range is based on: https://en.wikipedia.org/wiki/CJK_Unified_Ideographs

## usage

```typescript
const isChinese: (str: string, { includePunctuation }?: {
    includePunctuation?: boolean | undefined;
}) => boolean
```

## example

```js
import isChinese from 'is-chinese'
isChinese('中国').should.true();
isChinese('中国ss').should.false();
isChinese('ss').should.false();
isChinese("\uD842\uDFB7").should.true();
```

## benchmark

```
isChinese("扁担宽，板凳长，扁担想绑在板凳上。") x 15,813,552 ops/sec ±1.28% (98 runs sampled)
isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。") x 74,815,821 ops/sec ±0.72% (96 runs sampled)
isChinese("扁担宽，板凳长，扁担想绑在板凳上。ss") x 53,410,698 ops/sec ±0.47% (92 runs sampled)
isChinese(chars1000) true x 453,971 ops/sec ±0.57% (100 runs sampled)
isChinese(chars1000WithAscii) false x 2,817,982 ops/sec ±0.36% (90 runs sampled)
Fastest is isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。")
```

## license

MIT
