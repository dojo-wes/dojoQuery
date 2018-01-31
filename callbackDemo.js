function caller(callback, info) {
	var stuff = 'hello world';
	callback(info);
}

function logger(data) {
	console.log(data);
}

// caller(logger, 'hello world!');
caller(function(data) {
	console.log(data);
}, 'hello world')

// function counterParent() {
// 	var num = 0;
// 	function counterChild() {
// 		num++;
// 		return num;
// 	}
// 	return counterChild;
// }

// var counter = counterParent();
// var counter2 = counterParent();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter2());
// console.log(counter2());