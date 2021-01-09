let eventt 
function fadeInEffect() {
	let fadeElements = document.getElementsByClassName("fade-in-effect");
	for (let e of fadeElements) {
		e.style.opacity = 1;
		e.style.transform = 'scale(1)';
		e.style['-o-transform'] = 'scale(1)';
		e.style['-webkit-transform'] = 'scale(1)';
		e.style['-moz-transform'] = 'scale(1)';
	}
}


function flyAnimation(e) {
	/* run flyAnimation on paper plane element 'e' */
	console.log('flying');
	e.style['animation-play-state'] = 'running';
	setTimeout(function(){e.style['animation-play-state'] = 'paused';}, 3090);
}


function prepareFlyAnimation() {
	let paperPlaneElements = document.getElementsByClassName("paper-plane");
    for (let e of paperPlaneElements) {
    	e.addEventListener("mouseover", function(event) {
    		flyAnimation(e)
    	});
    }
}


window.addEventListener("load", function(){
    fadeInEffect();
    prepareFlyAnimation();
});


