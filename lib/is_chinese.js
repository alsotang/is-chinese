require('string.prototype.codepointat');

var chineseRange = [
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
      if (charCode >= range[0] && charCode <= range[1]) {
        flag = true;
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
