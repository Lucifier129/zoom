;(function(window, undefined) {

	var doc = window.document,
		html = doc.documentElement,
		body = document.body;

	if (!body) {
		throw new Error('zoom.js need the body node in document.')
	}

	var zoom = {};

	zoom.rem = parseFloat(getComputedStyle(html, null).getPropertyValue('font-size'), 10) || 16;

	zoom.maxWidth = parseFloat(getComputedStyle(body, null).getPropertyValue('max-width'), 10) || 640;

	zoom.resize = function() {
		var ratio = window.innerWidth / zoom.maxWidth;
		body.style.zoom = ratio;
		html.style.fontSize = ratio * zoom.rem + 'px';
	};

	zoom.resize();

	window.addEventListener('resize', function() {
		zoom.resize();
	}, false);

	window.zoom = zoom;

}(this));