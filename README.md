## description

Chinese range is based on: https://en.wikipedia.org/wiki/CJK_Unified_Ideographs

When your js runtion support es6, the result would more accuracy.


## example

```js
var isChinese = require('..')
isChinese('中国').should.true();
isChinese('中国ss').should.false();
isChinese('ss').should.false();

// when es6 is enable, es5 would fail
isChinese("\uD842\uDFB7").should.true();

```

## usage

## license

MIT