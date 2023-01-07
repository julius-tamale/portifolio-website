
let string = 'Portifolio website still under construction. \n Visit back soon'; /* type your text here */
let array = string.split("");
let timer;

function frameLooper () {
	if (array.length > 0) {
		document.querySelector(".main-heading").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();