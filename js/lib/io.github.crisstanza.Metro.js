"use strict";

if (!io) var io = {};
if (!io.github) io.github = {};
if (!io.github.crisstanza) io.github.crisstanza = {};
if (!io.github.crisstanza.Autos) io.github.crisstanza.Metro = {};

(function() {

	io.github.crisstanza.Metro = function(container) {
		this.container = container;
		if (this.container) {
			this.loadContainerHtml();
		}
	};

	io.github.crisstanza.Metro.prototype.loadContainerHtml = function() {
		this.container.innerHTML = 123;
	}

	function init(event) {
	}

	window.addEventListener('load', init);

})();
