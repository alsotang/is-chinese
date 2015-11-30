
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



var es5Version = function (str) {
  var char;
  var charCode;
  var flagJ;
  var range;

  for (var i = 0; i < str.length; i++) {
    char = str[i];
    charCode = char.charCodeAt(0);
    flagJ = false;

    for (var j = 0; j < chineseRange.length; j++) {
      range = chineseRange[j];
      if (charCode >= range[0] && charCode <= range[1]) {
        flagJ = true;
        break;
      }
    }

    if (!flagJ) {
      return false;
    }
  }

  return true;
}

var es6Version = function (str) {
  'use strict'

  var char;
  var charCode;
  var flagJ;
  var range;

  for (let char of str) {
    charCode = char.codePointAt(0);
    flagJ = false;

    for (var j = 0; j < chineseRange.length; j++) {
      range = chineseRange[j];
      if (charCode >= range[0] && charCode <= range[1]) {
        flagJ = true;
        break;
      }
    }

    if (!flagJ) {
      return false;
    }
  }

  return true;
}


exports = module.exports = (function () {
  try {
    if (es6Version('\u{20BB7}') == true) {
      return es6Version;
    }
  } catch (e) {
    return es5Version;
  }
})();


exports.es5 = es5Version;
exports.es6 = es6Version;