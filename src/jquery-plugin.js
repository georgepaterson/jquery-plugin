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
	};
  Dialog.prototype.show = function () {
    var that = this;
    /*  */
    if (this.isShown) {
      return;
    }
    /*  */
    this.element.addClass('dialog-show').attr('aria-hidden', false).trigger('focus');    
    this.modal = $('<div class="dialog-modal" />').prependTo(this.element).on('click.dialog', function (event) {
      that.hide();
    });
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
  Dialog.prototype.hide = function () {
    /*  */
    if (!this.isShown) {
      return;
    }
    /*  */
    this.element.removeClass('dialog-show').attr('aria-hidden', true);
    /*  */
    this.modal.remove();
    /*  */
    this.modal = null;
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
			} else if (options.auto) {
			  data.show();
			}
    });
  };
  /*  */
  $.fn.dialog.defaults = {
    auto: true
  };
}(jQuery));
