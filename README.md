# jQuery plugin

Demonstration jQuery plugin showing how to structure a plugin with public functions for unit testing.

_Dialog plugin is only designed as a demonstration not for production._

## Getting Started

Download the [minified version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/georgepaterson/jquery-jquery-plugin/master/dist/jquery.jquery-plugin.min.js
[max]: https://raw.githubusercontent.com/georgepaterson/jquery-jquery-plugin/master/dist/jquery.jquery-plugin.js

In your web page:

```html
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


## Release History
_(Nothing yet)_
