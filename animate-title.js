var SPEED = 500;
var TIMEOUT = 1.5 * SPEED;

var interval;

var frames = ["💞 NappyPaws 💞", "💗 NappyPaws 💗", "🌸 NappyPaws 🌸"];

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
		interval = setInterval(animate, SPEED);
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
