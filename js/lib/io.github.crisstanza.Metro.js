"use strict";

if (!io) var io = {};
if (!io.github) io.github = {};
if (!io.github.crisstanza) io.github.crisstanza = {};
if (!io.github.crisstanza.Metro) io.github.crisstanza.Metro = {};

(function() {

	io.github.crisstanza.Metro = function(container) {
		this.container = container;
		if (this.container) {
			this.loadContainerHtml();
		}
	};

	io.github.crisstanza.Metro.prototype.loadContainerHtml = function() {
		$.ajax.get(
			'./lib/io.github.crisstanza.Metro.html', this,
			function(target, status, responseText) { target.loadContainerHtml_Callback(target, status, responseText); },
			function(target, status, responseText) { target.loadContainerHtml_CallbackError(target, status, responseText); }
		);
	};

	io.github.crisstanza.Metro.prototype.loadContainerHtml_Callback = function(target, status, responseText) {
		this.container.innerHTML = responseText;
		io.github.crisstanza.Autos.initIds();
		io.github.crisstanza.Autos.initLinks(metro, this);		
	};

	io.github.crisstanza.Metro.prototype.loadContainerHtml_CallbackError = function(target, status, responseText) {
		this.container.innerHTML = status;
	};

	io.github.crisstanza.Metro.prototype.btStart_OnClick = function(event) {
		console.log(event);
	};

	io.github.crisstanza.Metro.prototype.btStop_OnClick = function(event) {
		console.log(event);
	};

	io.github.crisstanza.Metro.prototype.btPause_OnClick = function(event) {
		console.log(event);
	};

	io.github.crisstanza.Metro.prototype.btLess_OnClick = function(event) {
		console.log(event);
	};

	io.github.crisstanza.Metro.prototype.btMore_OnClick = function(event) {
		console.log(event);
	};

	function init(event) {
	}

	window.addEventListener('load', init);

})();
