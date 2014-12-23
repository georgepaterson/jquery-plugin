(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
  module('dialog', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });
  test('is chainable', function() {
    expect(1);
    strictEqual(this.elems.dialog(), this.elems, 'should be chainable');
  });
  test('should return jquery collection', function () {
    var $modal = this.elems.dialog();
    ok($modal instanceof $, 'returns jquery collection')
    strictEqual($modal[0], this.elems[0], 'collection contains element')
  });
  test('should call show method', function () {
    var $modal = this.elems.dialog();
    ok($modal.dialog('show'), 'show method called');
  });
  test('should call hide method', function () {
    var $modal = this.elems.dialog();
    ok($modal.dialog('hide'), 'hide method called');
  });
  test('should call destroy method', function () {
    var $modal = this.elems.dialog();
    ok($modal.dialog('destroy'), 'destroy method called');
  });
}(jQuery));
