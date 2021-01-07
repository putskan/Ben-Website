

function initShrinkingEffect(rowElement) {
	/* 
		Create a shrinking effect, for bootstrap grid columns.
		i.e., expand the column elements under rowElement, and shrink back to original size
	 */
	let nodes = rowElement.childNodes;
	for(var i = 0; i < nodes.length; i++) {
		if (typeof nodes[i].className === 'undefined') {
			continue
		}

		let originalClasses = nodes[i].className;
		let isColumnElement = false;

		let originalClassesArr = nodes[i].className.split(" ");
		let newClassesArr = ["col-12", "col-sm-12"];
		originalClassesArr.forEach((c) => {
			if(c.substr(0, 4) === "col-") {
				isColumnElement = true;
			} else {
				newClassesArr.push(c);
			}
		});
		if(!isColumnElement) {
			continue
		}
		/* expand */
		nodes[i].className = newClassesArr.join(" ");
		/* shrink back */
    	setTimeout(function (e) {
			e.className = originalClasses;
    	}, 500, nodes[i]);
	}


}




/* test */

document.addEventListener("DOMContentLoaded", function(){
	let e = document.getElementById("index-project-types-container");
	/*initShrinkingEffect(e)*/
});



