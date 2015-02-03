# jQuery plugin

Demonstration jQuery plugin showing how to structure a plugin with public functions for unit testing.

_Dialog plugin is only designed as a demonstration not for production._

## Documentation

This jQuery plugin demonstrates a jQuery plugin pattern with public functions, supporting structured unit testing. The plugin has been scaffolded using the [https://github.com/yeoman/generator-jquery][Yeoman jQuery generator].

The plugin has three sections, the dialog class, the class prototypes, and the jQuery constructor.

### Dialog class 


```javascript
var Dialog = function (element, options) {
 this.element = $(element);
 this.options = options;
 this.isShown = null;
};
```
### Class prototypes

```javascript
Dialog.prototype.destroy = function () {
  this.hide();
  this.element.removeData('dialog');
};
```

###  jQuery constructor

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
