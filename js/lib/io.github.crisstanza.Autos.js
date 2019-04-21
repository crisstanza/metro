"use strict";

if (!io) var io = {};
if (!io.github) io.github = {};
if (!io.github.crisstanza) io.github.crisstanza = {};
if (!io.github.crisstanza.Autos) io.github.crisstanza.Autos = {};

(function() {

	io.github.crisstanza.Autos.initLinks = function(_parent, _target) {
		var parent = _parent ? _parent : document;
		let elements = parent.querySelectorAll('a:not([href]):not([href=""])');
		let target = _target ? '_target.' : '';
		$.forEach(
			elements, function(link, index) {
				let id = link.getAttribute('id');
				let identifier = fixId(id);
				link.addEventListener('click', function(event) { eval(target + identifier + '_OnClick(event)'); } );
			}
		);
	};

	io.github.crisstanza.Autos.initIds = function(_parent) {
		var parent = _parent ? _parent : document;
		let elements = parent.querySelectorAll('[id]:not([id=""])');
		if (elements) {
			let length = elements.length;
			for (let i = 0 ; i < length ; i++) {
				let element = elements[i];
				let id = element.getAttribute('id');
				let identifier = fixId(id);
				window[identifier] = element;
			}
		}
		return elements;
	};

	function fixId(id) {
		let parts = id.split('-');
		let length = parts.length;
		for (let i = 0 ; i < length ; i++) {
			let part = parts[i];
			if (i > 0) {
				parts[i] = part.charAt(0).toUpperCase() + part.slice(1);
			}
		}
		let identifier = parts.join('');
		return identifier;
	}

})();
