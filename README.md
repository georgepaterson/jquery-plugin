# jQuery dialog plugin

Demonstration jQuery dialog plugin showing how to structure a plugin with public functions for unit testing.

_Dialog plugin is only designed as a demonstration not for production._

## Getting Started

Download the [production version][min] or the [development version][max].

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
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
