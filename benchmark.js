suite('is_chinese', function () {
  var isChinese = require('.')

  bench('isChinese("扁担宽，板凳长，扁担想绑在板凳上。")', function() {
    isChinese("扁担宽，板凳长，扁担想绑在板凳上。");
  });
});