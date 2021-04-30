const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const isChinese = require('./')

suite
  .add('isChinese("扁担宽，板凳长，扁担想绑在板凳上。")', function () {
    isChinese("扁担宽，板凳长，扁担想绑在板凳上。");
  })
  .add('isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。")', function () {
    isChinese("ss扁担宽，板凳长，扁担想绑在板凳上。");
  })
  .add('isChinese("扁担宽，板凳长，扁担想绑在板凳上。ss")', function () {
    isChinese("扁担宽，板凳长，扁担想绑在板凳上。ss");
  })
  .add('isChinese(chars1000) true', function () {
    const chars1000 = '扁担宽，板凳长，扁担'.repeat(100)
    isChinese(chars1000);
  })
  .add('isChinese(chars1001) false', function () {
    const chars1000 = '扁担宽，板凳长，扁担'.repeat(100) + 's'
    isChinese(chars1000);
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });