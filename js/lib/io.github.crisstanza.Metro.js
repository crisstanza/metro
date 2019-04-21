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
			function(target, status, responseText) { target.loadContainerHtml_Callback(status, responseText); },
			function(target, status, responseText) { target.loadContainerHtml_CallbackError(status, responseText); }
		);
	};

	io.github.crisstanza.Metro.prototype.loadContainerHtml_Callback = function(status, responseText) {
		this.container.innerHTML = responseText;
		io.github.crisstanza.Autos.initIds();
		io.github.crisstanza.Autos.initLinks(this.container, this);
		this.loadMusic();
	};

	io.github.crisstanza.Metro.prototype.loadMusic = function() {
		let mainLink = document.querySelector('article header h1 span a');
		$.ajax.get(
			mainLink.getAttribute('href')+'.js', this,
			function(target, status, responseText) { target.loadMusic_Callback(status, responseText); },
			function(target, status, responseText) { target.loadMusic_CallbackError(status, responseText); }
		);
	};

	io.github.crisstanza.Metro.prototype.loadMusic_Callback = function(status, responseText) {
		let musicText = $.removeComments(responseText);
		this.music = JSON.parse(musicText);
		speed.innerHTML = this.music.speed;
		meter.innerHTML = this.music.meter;
	};

	io.github.crisstanza.Metro.prototype.loadMusic_CallbackError = function(status, responseText) {
		this.container.innerHTML = status;
	};

	io.github.crisstanza.Metro.prototype.loadContainerHtml_CallbackError = function(status, responseText) {
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
