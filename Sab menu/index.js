//document.getElementById('level').scrollTop = document.getElementById('level').scrollHeight;
var of = false;
var ofa = false;
var link;

document.getElementById('menu').addEventListener('click', () => {
	ofa = !ofa;
	document.getElementById('menus').className = String(ofa);
})

document.getElementById('right-close').addEventListener('click', () => {
	right_close();
})

document.getElementById('area1').addEventListener('click', () => {
	starts("../Brain God/index.html", 1);
})

document.getElementById('area2').addEventListener('click', () => {
	starts("../Brain G/index.html", 2);
})

document.getElementById('area3').addEventListener('click', () => {
	starts("../Brain Good/index.html", 3);
})

var area_before;

function starts(link, area) {
	if (area != area_before) {
		if (document.getElementById("right").className == "true") {
			right_close();
			startson("true");
		} else {
			startson();
		}
		area_before = area;
	}

	function startson(TFa) {
		setTimeout(function () {
			document.getElementById("right_info").style.whiteSpace = "nowrap";

			document.getElementById("right_info").innerHTML =
				document.getElementById("area" + (area) + "_").innerHTML;

			document.getElementById('right').className = "true";
			setTimeout(() => {
				document.getElementById("right_info").style.whiteSpace = "normal";
			}, getCSS("right", "transition-duration"))


			document.getElementById('start').addEventListener('click', () => {
				document.getElementById('load').className = "true";
				setTimeout(() => {
					document.location.href = link;
					/*document.getElementById('load').className = "false";
					document.getElementById('right').className = "false";*/
				}, 3000)
			})
		}, TFa == "true" ? getCSS("right", "transition-delay") + getCSS("right", "transition-duration") + 200 : 0)
	}
}

function right_close() {
	CSS("#right")["transition-delay"] = CSS(".right-button")["transition-duration"][0];
	//console.log(CSS("#right")["transition-delay"]);

	var RBheight = CSS(".right-button")["height"][0];
	CSS(".right-button")["height"] = "0";

	document.getElementById("right_info").style.whiteSpace = "nowrap";
	document.getElementById('right').className = "false";

	setTimeout(function () {
		CSS("#right")["transition-delay"] = "0s";
		//console.log(CSS("#right")["transition-delay"])
		CSS(".right-button")["height"] = RBheight;
	}, getCSS("right", "transition-duration") + getCSS("right", "transition-delay"));
}

function getCSS(id, name) {
	return getCSSById(document.getElementById(id), name);
}

function getCSSById(element, name) {
	return parseFloat(window.getComputedStyle(element).getPropertyValue(name)) * 1000
}

function CSS(elements) {
	if (typeof elements == "string") {
		// Parse as querySelector
		elements = document.querySelectorAll(elements);
	}
	elements = Array.from(elements);
	// window.getComputedStyle(element).getPropertyValue(name);
	return new Proxy({}, {
		get: function (target, name) {
			return elements.map(function (element) {
				return window.getComputedStyle(element).getPropertyValue(name);
			})
		},
		set: function (target, name, value) {
			var errors = elements.map(function (element) {
				try {
					element.style[name] = value;
				} catch (e) {
					return e;
				}
				return undefined;
			});
			if (errors.reduce(function (pv, cv) {
					return pv + (cv ? 1 : 0);
				}, 0) == 0) return true;
			throw errors;
		}
	});
}