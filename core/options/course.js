var config = require('./../../config');
var getData = require('./../get-data');

module.exports = {
	cbrf: function () {
			getData(config.get('course:courseCBRF:course')).then(function (result) {
			return result;
		});
	},
	nbu: function () {
			getData(config.get('course:courseNBU:course')).then(function (result) {
			return result;
		});
	},
	historyNbu: function (date) {
			getData(config.get('course:courseNBU:history')).then(function (result) {
			return result;
		});
	},
	nalPb: function () {
			getData(config.get('course:coursePB:nalPB')).then(function (result) {
			return result;
		});
	},
	noNalPb: function () {
			getData(config.get('course:coursePB:noNalPB')).then(function (result) {
			return result;
		});
	},
	historyPb: function (date) {
			getData(config.get('course:coursePB:history') + date).then(function (result) {
			return result;
		});
	}
};

