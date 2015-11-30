## description

Chinese range is based on: https://en.wikipedia.org/wiki/CJK_Unified_Ideographs

When your js runtion support es6, the result would more accuracy.


## example

```js
var isChinese = require('..')
isChinese('中国').should.true();
isChinese('中国ss').should.false();
isChinese('ss').should.false();

// when es6 is enable, it's true. es5 would fail
isChinese("\uD842\uDFB7").should.true();

```

## benchmark

```
966,144 op/s » isChinese("扁担宽，板凳长，扁担想绑在板凳上。")
```

## license

MIT