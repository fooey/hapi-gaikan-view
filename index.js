'use strict';

var Gaikan = require('gaikan');

module.exports = {
	compileMode: 'async', 
	module: {
		compile: function compile(str, options, next) {
			var compiled = Gaikan.bind(null, options.filename);

			return next(null, 
				function (context, options, callback) {
					compiled(context, callback); 
				} 
			);
		}  
	},
};


