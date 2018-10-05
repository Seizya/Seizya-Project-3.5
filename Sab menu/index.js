//document.getElementById('level').scrollTop = document.getElementById('level').scrollHeight;
var of = false;
var ofa = false;
var link;

document.getElementById('menu').addEventListener('click', () => {
	ofa = !ofa;
	document.getElementById('menus').className = String(ofa);
})

document.getElementById('right-close').addEventListener('click', () => {
	document.getElementById("right_info").style.whiteSpace = "nowrap";
	document.getElementById('right').className = "false";
})

document.getElementById('lv1').addEventListener('click', () => {
	starts("../Brain God/index.html", 1);
})

document.getElementById('lv2').addEventListener('click', () => {
	starts("../Brain G/index.html", 2);
})

document.getElementById('lv3').addEventListener('click', () => {
	starts("../Brain Good/index.html", 3);
})

function starts(link, lv) {
	if (document.getElementById("right").className == "true") {
		document.getElementById("right_info").style.whiteSpace = "nowrap";
		document.getElementById("right").className = "false";

		setTimeout(() => {
			startson();
		}, getCSSById("right", "transition-duration")+200)
	} else {
		document.getElementById("right_info").style.whiteSpace = "nowrap";
		startson();
	}

	function startson() {

		document.getElementById("right_info").innerHTML =
			document.getElementById("lv" + (lv) + "_").innerHTML;

		document.getElementById('right').className = "true";
		setTimeout(() => {
			document.getElementById("right_info").style.whiteSpace = "normal";
		}, getCSSById("right", "transition-duration"))


		document.getElementById('start').addEventListener('click', () => {
			document.getElementById('load').className = "true";
			setTimeout(() => {
				document.location.href = link;
				document.getElementById('load').className = "";
				document.getElementById('right').className = "";
			}, 3000)
		})
	}

}

function getCSSById(id, name) {
	return getCSS(document.getElementById(id), name);
}

function getCSS(element, name) {
	return parseFloat(window.getComputedStyle(element).getPropertyValue(name)) * 1000
}