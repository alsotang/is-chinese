[![Build Status](https://travis-ci.org/alsotang/is-chinese.svg?branch=master)](https://travis-ci.org/alsotang/is-chinese)

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
var isChinese = require('..')
isChinese('中国').should.true();
isChinese('中国ss').should.false();
isChinese('ss').should.false();
isChinese("\uD842\uDFB7").should.true();
```

## benchmark

Node 4.2.1 

```
       8,643,328 op/s » isChinese("扁担宽，板凳长，扁担想绑在板凳上。")
      17,484,791 op/s » isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。")
```

## license

MIT