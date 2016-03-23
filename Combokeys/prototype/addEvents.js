/* eslint-env node, browser */
'use strict'

function on (element, event, callback, capture) {
  !element.addEventListener && (event = 'on' + event);
  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
  return callback;
}

module.exports = function () {
  var self = this
  var element = self.element

  self.eventHandler = require('./handleKeyEvent').bind(self)

  on(element, 'keypress', self.eventHandler)
  on(element, 'keydown', self.eventHandler)
  on(element, 'keyup', self.eventHandler)
}
