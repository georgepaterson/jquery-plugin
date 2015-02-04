# jQuery plugin

Demonstration jQuery plugin showing how to structure a plugin with public functions for unit testing.

_Dialog plugin is only designed as a demonstration not for production._

## Getting started

The plugin has been scaffolded using the [Yeoman jQuery generator][yeoman].

There are three possible grunt tasks for this project accessible through the command line.

	$ grunt

The default grunt task will run the unit tests on a local server, and if the tests are passed it will generate the distribution code. 

	$ grunt serve

Grunt serve will created a local server, the demo can be found at http://0.0.0.0:9000/demo, although a local server is not necessary to run this demo.

	$ grunt test
	
Grunt test will run the unit tests. 

## Documentation

This jQuery plugin demonstrates a jQuery plugin pattern with public functions, supporting structured unit testing. The plugin has been scaffolded using the [Yeoman jQuery generator][yeoman].

[yeoman]: https://github.com/yeoman/generator-jquery

The plugin has three sections, the dialog class, the class prototypes, and the jQuery constructor.

### Dialog class 

Definition of the dialog class, with class properties.

```javascript
var Dialog = function (element, options) {
 this.element = $(element);
 this.options = options;
 this.isShown = null;
};
```
### Dialog methods

Hide, show, amd destroy methods have been created using prototype. These method are public and can be called through the jQuery constructor.

```javascript
Dialog.prototype.destroy = function () {
  this.hide();
  this.element.removeData('dialog');
};
```

Public methods are testable by unit testing frameworks.

###  jQuery constructor

The jQuery constructor binds the new dialog class instance as data to the element, and allows us to set the element and option properties.

If the same class instance already exists then we use that instance and test for available methods or options. 

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

Defaults options are available to become properties of the class instance.

```javascript
$.fn.dialog.defaults = {
  auto: true
}; 
```

## Unit testing



## Release History
_(Nothing yet)_
