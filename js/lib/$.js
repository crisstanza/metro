"use strict";

if (!$) var $ = {};

(function() {

	if (!$.ajax) $.ajax = {};

	$.forEach = function(elements, callback) {
		if (elements) {
			let length = elements.length;
			for (let i = 0 ; i < length ; i++) {
				let element = elements[i];
				callback(element, i);
			}
		}
	};

	$.ajax.get = function(url, target, callback, callbackError) {
		let request = new XMLHttpRequest();
		if (callback) {
			request.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (request.status == 200) {
						callback(target, this.status, this.responseText);
					} else if (callbackError) {
						callbackError(target, this.status, this.responseText);
					}
				}
			};
		}
		if (callbackError) {
			request.onerror = function() {
				callbackError(target, this.status, this.responseText);
			};
		}
		request.open('GET', url, true);
		request.send();
	};

})();
