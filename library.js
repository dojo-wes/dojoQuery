var d$ = {
	get: function(endpoint, callback) {
		setTimeout(function() {
			var data = api[endpoint];
			callback(data);
		}, Math.random() * 5000);
	}
};