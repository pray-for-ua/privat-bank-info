var XmlToJson =require('xml2js');
var Q = require('q');

module.exports = function (data) {
	var deferred = Q.defer();
	var parser = new XmlToJson.Parser();

	parser.parseString(data, function (err, results) {
		if (err) deferred.reject(new Error('XML not parsing.'));

		deferred.resolve(results);
	});

	return deferred.promise;
};