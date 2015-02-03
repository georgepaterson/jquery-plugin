# jQuery plugin

Demonstration jQuery plugin showing how to structure a plugin with public functions for unit testing.

_Dialog plugin is only designed as a demonstration not for production._

## Getting Started

Download the [minified version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/georgepaterson/jquery-jquery-plugin/master/dist/jquery.jquery-plugin.min.js
[max]: https://raw.githubusercontent.com/georgepaterson/jquery-jquery-plugin/master/dist/jquery.jquery-plugin.js

In your web page:

```html
<link rel="stylesheet" href="dist/jquery-plugin.css" type="text/css" media="screen">
<script src="jquery.js"></script>
<script src="dist/jquery-plugin.min.js"></script>
<script>
jQuery(function($) {
	$('.show').on('click', function (event) {
		event.preventDefault();
		$('#example').dialog();
	});
});
</script>
```

## Documentation

This jQuery plugin demonstrates a jQuery plugin pattern with public functions, supporting structured unit testing.

The plugin has three sections, the dialog class constructor, the class prototype functions, and the jQuery instantiation.

### Class constructor

```javascript
var Dialog = function (element, options) {
 this.element = $(element);
 this.options = options;
 this.isShown = null;
};
```
### Class prototype funtions 

```javascript
Dialog.prototype.destroy = function () {
  this.hide();
  this.element.removeData('dialog');
};
```

###  jQuery instantiation

```javascript
$.fn.dialog = function (method) {
  return this.each(function () {
    var data = $(this).data('dialog'),
      options = $.extend(true, {}, $.fn.dialog.defaults, $(this).data('dialog'), typeof method === 'object' && method);
    if (!data) {
      $(this).data('dialog', (data = new Dialog(this, options)));
    }
    if (typeof method === 'string' && data[method]) {
      data[method]();
    } else if (options.auto) {
      data.show();
    }
  });
};
```

```javascript
$.fn.dialog.defaults = {
  auto: true
}; 
```


## Release History
_(Nothing yet)_
