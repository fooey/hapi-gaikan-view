hapi-gaikan-view
================

Gaikan.js for Hapi.js


###Usage example:


```
var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 3000, {
	views: {
		path: './views',
		engines: {
			html: require('hapi-gaikan-view')
		}
	}
});

server.start(function () {
	server.log('info', 'Server running at: ' + server.info.uri);
});
```