var METRO;

(function() {

	function initPre() {
		if (pre) {
			pre.innerHTML = pre.innerHTML.trim();
		}
	}

	function initMetro() {
		METRO = new io.github.crisstanza.Metro(metro);
	}

	function window_Load(event) {
		io.github.crisstanza.Autos.initIds();
		initPre();
		initMetro();
	}

	window.addEventListener('load', window_Load);

})();
