var request = require('request');
var Q = require('q');
var parserJSON = require('./json-parser');

module.exports = function (url) {
	var deferred = Q.defer();
	if (~url.indexOf('json')) {
		request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				deferred.resolve(body);		
		  	} else {
		  		deferred.reject(new Error('Data not getting.'));
		  	}
		});	
	} else {
		request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				parserJSON(body).then(function (results) {
					deferred.resolve(results);
				});	
		  	} else {
		  		deferred.reject(new Error('Data not getting.'));
		  	}
		});
	}
	
	return deferred.promise;
};