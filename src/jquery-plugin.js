/*
 * Example dialog plugin
 * 
 *
 * Copyright (c) 2015 George Paterson
 * Licensed under the MIT license.
 */
(function ($) {
  'use strict';
  // Dialog class constructor.
	var Dialog = function (element, options) {
		this.element = $(element);
		this.options = options;
    this.isShown = null;
	};
  // Dialog show public function.
  Dialog.prototype.show = function () {
    var that = this;
    // If dialog is already shown, exit.
    if (this.isShown) {
      return;
    }
    // Add class and ARIA attributes, set focus on dialog. 
    this.element.addClass('dialog-show').attr('aria-hidden', false).trigger('focus');
    // Add modal background, add hide event trigger.    
    this.modal = $('<div class="dialog-modal" />').prependTo(this.element).on('click.dialog', function (event) {
      that.hide();
    });
    // Add focusin event, if in page focus is not on the dialog set focus on the dialog.
    $(document).on('focusin.dialog', function (event) {
      if (that.element[0] !== event.target && !that.element.has(event.target).length) {
        that.element.trigger('focus');
      }
    });
    // Add keyup event, if escape key is used trigger hide event.
		$(document).on('keyup.dialog', function (event) {
			if (event.which === 27) {
				that.hide();
			}
		});
    // Dialog is now shown.
    this.isShown = true;
  };
  // Dialog hide public function.
  Dialog.prototype.hide = function () {
    // If dialog is not shown, exit.
    if (!this.isShown) {
      return;
    }
    // Remove class and ARIA attributes.
    this.element.removeClass('dialog-show').attr('aria-hidden', true);
    // Remove modal background.
    this.modal.remove();
    // Clear modal value.
    this.modal = null;
    // Remove focusin event.
    $(document).off('focusin.dialog');
    // Remove keyup event.
    this.element.off('keyup.dialog');
    // Dialog is now not shown.
    this.isShown = false;
  };
  // Dialog destroy public function. 
  Dialog.prototype.destroy = function () {
    // Trigger the hide public function 
    this.hide();
    // Remove the dialog data attached to the element.
    this.element.removeData('dialog');
  };
  // Dialog jQuery plugin instantiation.
  $.fn.dialog = function (method) {
    return this.each(function () {
      // Set data and options.
      var data = $(this).data('dialog'),
        options = $.extend(true, {}, $.fn.dialog.defaults, $(this).data('dialog'), typeof method === 'object' && method);
      // If no data create a new dialog.
      if (!data) {
        $(this).data('dialog', (data = new Dialog(this, options)));
      }
      // Test if a public function is called, else if no function try showing the dialog.
      if (typeof method === 'string' && data[method]) {
        data[method]();
      } else if (options.auto) {
        data.show();
      }
    });
  };
  // Dialog default options.
  $.fn.dialog.defaults = {
    auto: true
  };
}(jQuery));
