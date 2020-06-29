(function() {

	let MEASURE_COUNT = 8;
	let MEASURE_BEATS = 4;
	let SPEED = 60;

	let METRO;

	function init(event) {
		let callback = {
			willStart: function(beat) {
			},
			justStarted: function(beat) {
			},
			willPlay: function(beat) {
				console.log(beat)
			},
			justPlayed: function(beat) {
			},
			justStopped: function(beat) {
			}
		};
		METRO = new io.github.crisstanza.Metro(callback, MEASURE_COUNT, MEASURE_BEATS, SPEED);
		METRO.gui(btStart, btStop);
		io.github.crisstanza.Autos.initButtons(METRO);
	}

	function window_HashChange(event) {
		var hash = document.location.hash;
		console.log(hash);
	}

	function window_Load(event) {
		init(event);
	}

	window.addEventListener('load', window_Load);
	window.addEventListener('hashchange', window_HashChange);

})();
