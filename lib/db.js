'use strict';

var mongoose = require('mongoose');

var db = function(){
	return {
		config: function(conf){
			mongoose.connect('mongodb://admin:0956319714@ds129166.mlab.com:29166/tekbooks');
			var db = mongoose.connection;
			db.on('error', console.error.bind(console, 'Connection Error'));
			db.once('open', function(){
				console.log('DB Connection Open...');
			});
		}
	}
}

module.exports = db();