var APP = APP || {};

APP.home = {
};

var App = function () {}
App.prototype.get = function (url, callback) {
	// this.responseText in callback**
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', callback);
	xhr.open('get', url, true);
	xhr.send();
}

App.prototype.render = function () {
	
}

var portfolio = new App();
// portfolio.get('https://google.com');
portfolio.render();

// function get (url, callback) {
// 	// this.responseText in callback**
// 	var xhr = new XMLHttpRequest();
// 	xhr.addEventListener('load', callback);
// 	xhr.open('get', url, true);
// 	xhr.send();
// }