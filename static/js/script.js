
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


window.addEventListener("load", function(){
    fadeInEffect()
});
