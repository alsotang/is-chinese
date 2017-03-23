[![Build Status](https://travis-ci.org/alsotang/is-chinese.svg?branch=master)](https://travis-ci.org/alsotang/is-chinese)

JS 中文字符串判断（根据 unicode 编码区间判断）

## install

for npm

`$ npm install is-chinese`

for browser

`<script src="ischinese.js"></script>`

A UMD bundle. If no module system is found, `window.ischinese` would be assigned.

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

Node 4.2.1

```
13,441,062 op/s » isChinese("扁担宽，板凳长，扁担想绑在板凳上。")
22,514,623 op/s » isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。")
```

## license

MIT
