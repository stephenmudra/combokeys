function off (element, event, callback, capture) {
  !element.removeEventListener && (event = 'on' + event);
  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
  return callback;
}

module.exports = function () {
  var self = this
  var element = self.element

  off(element, 'keypress', self.eventHandler)
  off(element, 'keydown', self.eventHandler)
  off(element, 'keyup', self.eventHandler)
}
