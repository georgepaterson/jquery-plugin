/*
 * Example dialog plugin
 * 
 *
 * Copyright (c) 2015 George Paterson
 * Licensed under the MIT license.
 */
(function ($) {
  'use strict';

	var Dialog = function (element, options) {
		this.element = $(element);
		this.options = options;
    this.isShown = null;
    this.modal = null;
	};
  
  Dialog.prototype.show = function () {
    var that = this;
    /*  */
    if (this.isShown) {
      return;
    }
    /*  */
    this.element.addClass('dialog-show').attr('aria-hidden', false).trigger('focus');
    /*  */
    $(document).on('focusin.dialog', function (event) {
      if (that.element[0] !== event.target && !that.element.has(event.target).length) {
        that.element.trigger('focus');
      }
    });
    /*  */
		$(document).on('keyup.dialog', function (event) {
			if (event.which === 27) {
				that.hide();
			}
		});
    /*  */
    this.isShown = true;
  };
  
  Dialog.prototype.modal = function () {
  
  };
  
  Dialog.prototype.hide = function () {
    /*  */
    if (!this.isShown) {
      return;
    }
    /*  */
    this.element.removeClass('dialog-show').attr('aria-hidden', true);
    /*  */
    $(document).off('focusin.dialog');
    /*  */
    this.element.off('keyup.dialog');
    /*  */
    this.isShown = false;
  };

  Dialog.prototype.destroy = function () {
    /*  */
    this.hide();
    /*  */
    this.element.removeData('dialog');
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
