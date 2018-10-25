function giveCSS(id) {
	var element = document.getElementById(id);
	var style = document.defaultView.getComputedStyle(element, '');
	return style;
}