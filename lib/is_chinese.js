require('string.prototype.codepointat');

var chineseRange = [
  0x00b7, //·
  0x00d7, //×
  0x2014, //—
  0x2018, //‘
  0x2019, //’
  0x201c, //“
  0x201d, //”
  0x2026, //…
  0x3001, //、
  0x3002, //。
  0x300a, //《
  0x300b, //》
  0x300e, //『
  0x300f, //』
  0x3010, //【
  0x3011, //】
  0xff01, //！
  0xff08, //（
  0xff09, //）
  0xff0c, //，
  0xff1a, //：
  0xff1b, //；
  0xff1f, //？

  [0x4e00, 0x9fff], // CJK Unified Ideographs
  [0x3400, 0x4dbf], // CJK Unified Ideographs Extension A
  [0x20000, 0x2a6df], // CJK Unified Ideographs Extension B
  [0x2a700, 0x2b73f], // CJK Unified Ideographs Extension C
  [0x2b740, 0x2b81f], // CJK Unified Ideographs Extension D
  [0x2b820, 0x2ceaf], // CJK Unified Ideographs Extension E
  [0xf900, 0xfaff], // CJK Compatibility Ideographs

  [0x3300, 0x33ff], // https://en.wikipedia.org/wiki/CJK_Compatibility
  [0xfe30, 0xfe4f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Forms
  [0xf900, 0xfaff], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs
  [0x2f800, 0x2fa1f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement
]

var isChinese = function (str) {

  var charCode;
  var flag;
  var range;

  for (var i = 0; i < str.length;) {
    charCode = str.codePointAt(i);
    flag = false;

    for (var j = 0; j < chineseRange.length; j++) {
      range = chineseRange[j];
      if (Array.isArray(range) && charCode >= range[0] && charCode <= range[1]
        || range === charCode) {
        flag = true; // when true, the charCode is Chinese
        break;
      }
    }

    if (!flag) {
      return false;
    }

    if (charCode <= 0xffff) {
      i++
    } else {
      i += 2
    }
  }

  return true;
}


exports = module.exports = isChinese;
