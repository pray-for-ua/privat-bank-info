var config = require('./../../config');
var getData = require('./../get-data');

function parseUrl (url, city, street) {
	var firstPartUrl;
	var secondPartUrl;
	var thirdPartUrl;
	var cityNumber = url.indexOf('city=');
	var addressNumber = url.indexOf('address=');

	if (cityNumber < addressNumber) {
		firstPartUrl = url.substring(0, cityNumber + 5);
		secondPartUrl = url.substring(cityNumber + 5);

		url = firstPartUrl + city + secondPartUrl + street;
	} else {
		firstPartUrl = url.substring(0, addressNumber + 8);
		secondPartUrl = url.substring(addressNumber + 8, cityNumber + 5);
		thirdPartUrl = url.substring(cityNumber + 5);
		
		url = firstPartUrl + street + secondPartUrl + city + thirdPartUrl;
	}

	return url;
}

module.exports = {
	bank: function (city, street) {
		if (arguments.length > 0) {
			getData(parseUrl(config.get('location:bank'), city, street)).then(function (results) {
				return results;
			});		
		} else {
			getData(config.get('location:bank')).then(function (results) {
				return results;
			});
		}
	},
	atm: function (city, street) {
		if (arguments.length > 0) {
			getData(parseUrl(config.get('location:atm'), city, street)).then(function (results) {
				return results;
			});		
		} else {
			getData(config.get('location:atm')).then(function (results) {
				return results;
			});
		}
	},
	terminal: function (city, street) {
		if (arguments.length > 0) {
			getData(parseUrl(config.get('location:terminal'), city, street)).then(function (results) {
				return results;
			});		
		} else {
			getData(config.get('location:terminal')).then(function (results) {
				return results;
			});
		}
	}
};