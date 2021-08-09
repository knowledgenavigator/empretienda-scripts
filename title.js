// animates site title on scroll event

var SPEED = 500; // how fast you want the frames to change in ms (lower than 200 ms gets glitchy in some browsers)
var TIMEOUT = 1.5 * SPEED; // how long after stop scrolling to animate

var interval;

var frames = ["....*", "...*.", "..*..", ".*....", "*....", ".*....", "..*..", "...*."]; // fill this list with strings of the frames to be cycled

document.title = frames[0]; // initialize to the first frame
var currentFrame = 0;
var on = false;

function animate() {
	// cycle through frames
	document.title = frames[currentFrame];
	currentFrame += 1;
	if (currentFrame == frames.length) {currentFrame = 0;}
}

$( window ).scroll(function() {
	if (!on) {
		animate();
		interval = setInterval(animate, SPEED); // how fast you want it to animate is set by the speed
		on = true;
	}
});
$(window).scroll(function() {
	if (on) {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        clearTimeout(interval)
        on = false;
    }, TIMEOUT));
}
});
