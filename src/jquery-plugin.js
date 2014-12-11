/*
 * jquery plugin
 * 
 *
 * Copyright (c) 2014 George Paterson
 * Licensed under the MIT license.
 */

(function ($) {

  // Collection method.
  $.fn.jqueryPlugin = function () {
    return this.each(function (i) {
      // Do something to each selected element.
      $(this).html('jqueryPlugin' + i);
    });
  };

  // Static method.
  $.jqueryPlugin = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jqueryPlugin.options, options);
    // Return the name of your plugin plus a punctuation character.
    return 'jqueryPlugin' + options.punctuation;
  };

  // Static method default options.
  $.jqueryPlugin.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jqueryPlugin = function (elem) {
    // Does this element contain the name of your plugin?
    return $(elem).text().indexOf('jqueryPlugin') !== -1;
  };

}(jQuery));
