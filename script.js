d$.get('people', function(data) {
	console.log(data);
	for(var i = 0; i < data.length; i++) {
		document.getElementById('data').innerHTML += `
			<div>${data[i].name}</div>
			<div>${data[i].city}</div>
			<div>${data[i].favoriteLanguage}</div>
		`;
	}
});