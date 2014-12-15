/*
 * Example dialog plugin
 * 
 *
 * Copyright (c) 2014 George Paterson
 * Licensed under the MIT license.
 */

(function ($) {


	var Dialog = function (element, options) {
		this.element = $(element);
		this.options = options;
	};


  $.fn.dialog = function (method) {
    return this.each(function () {
      /*  */
			var data = $(this).data('dialog'),
				options = $.extend(true, {}, $.fn.dialog.defaults, $(this).data('dialog'), typeof method === 'object' && method);
			/*  */
      if (!data) {
				$(this).data('dialog', (data = new Dialog(this, options)));
			}
      /*  */
			if (typeof method === 'string' && data[method]) {
				data[method]();
			}
    });
  };
  /*  */
  $.fn.dialog.defaults = {
    modal: true
  };
}(jQuery));
