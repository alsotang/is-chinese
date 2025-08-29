import Benchmark from 'benchmark'
const suite = new Benchmark.Suite();
import isChinese from './src/is_chinese';

const chars1000 = '扁担宽，板凳长，扁担'.repeat(100)
const chars1000WithS = '扁担宽，板凳长，扁担'.repeat(100) + 's'

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
    isChinese(chars1000);
  })
  .add('isChinese(chars1000WithAscii) false', function () {
    isChinese(chars1000WithS);
  })
  // add listeners
  .on('cycle', function (event: any) {
    console.log(String(event.target));
  })
  .on('complete', function (this: Benchmark.Suite) {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });