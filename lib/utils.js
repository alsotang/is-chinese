exports.ises6 = function () {
  try {
    "".codePointAt()
    return true
  } catch (e) {
    return false
  }
}