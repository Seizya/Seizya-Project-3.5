//right-info-area----------------------------------------------------------------------------------
document.getElementById('right-close').addEventListener('click', () => right_close())
document.getElementById("stage0B01").addEventListener('click', () => starts("../Brain God/index.html", "0B01"));
document.getElementById("stage0B02").addEventListener('click', () => starts("../Brain G/index.html", "0B02"));
document.getElementById("stage0B03").addEventListener('click', () => starts("../Brain Good/index.html", "0B03"));
//right-info---------------------------------------------------------------------------------------
var area_before;
var RBheight = (parseFloat(CSS(".right-button")["height"][0]) / parseFloat(CSS("#right")["height"])) * 100 + "%";
var RBbottom = (parseFloat(CSS(".right-button")["bottom"][0]) / parseFloat(CSS("#right")["height"])) * 100 + "%";
CSS(".right-button")["bottom"] = parseFloat(CSS(".right-button")["bottom"]) + parseFloat(CSS(".right-button")["height"]) * .5 + "px";
CSS(".right-button")["height"] = "0";

function starts(link, area) {
	if (document.getElementById("right").className == "true" && area != area_before) {
		right_close();
		startson("true");
	} else {
		startson();
	}
	area_before = area;

	function startson(TFa) {
		setTimeout(function () {
			CSS(".right-button")["height"] = RBheight;
			CSS(".right-button")["bottom"] = RBbottom;
		}, right_transition("duration") + (TFa == "true" ? right_transition("duration") * 2 /*+ getCSS("right", "transition-delay")*/ : 0))

		setTimeout(function () {
			document.getElementById("right_info").style.whiteSpace = "nowrap";

			document.getElementById("right_info").innerHTML =
				document.getElementById("stage" + (area) + "_").innerHTML;

			document.getElementById('right').className = "true";
			setTimeout(() => {
				document.getElementById("right_info").style.whiteSpace = "normal";
			}, right_transition("duration"))


			document.getElementById('start').addEventListener('click', () => {
				document.getElementById('load').className = "true";
				setTimeout(() => {
					document.location.href = link;
					/*document.getElementById('load').className = "false";
					document.getElementById('right').className = "false";*/
				}, 3000)
			})
		}, TFa == "true" ? right_transition("delay") + right_transition("duration") + 200 : 0)
	}
}

function right_close() {
	CSS("#right")["transition-delay"] = parseFloat(CSS(".right-button")["transition-duration"][0]) * 2 + "s";
	//console.log(CSS("#right")["transition-delay"]);

	CSS(".right-button")["bottom"] = parseFloat(CSS(".right-button")["bottom"]) + parseFloat(CSS(".right-button")["height"]) * .5 + "px";
	CSS(".right-button")["height"] = "0";
	//console.log(CSS(".right-button")["bottom"])

	document.getElementById("right_info").style.whiteSpace = "nowrap";
	document.getElementById('right').className = "false";

	setTimeout(function () {
		CSS("#right")["transition-delay"] = "0s";
		//console.log(CSS("#right")["transition-delay"])
	}, right_transition("duration") + right_transition("delay"));
}

/*window.addEventListener("load", () => importHTMLs());

function importHTMLs() {
	const warn = (...args) => console.warn("[importHTMLs] ", ...args);
	Array.from(document.getElementsByTagName("import")).forEach(_ => {
		const path = _.getAttribute("src");
		if (!path) {
			warn("srcに読み込みたいファイルパスが指定されていないimportタグがありました。とりあえず無視しときました。");
			return;
		}
		fetch(path)
			.then(res => res.text())
			.then(text => {
				_.outerHTML = text;
			}).catch(err => {
				warn(path + " の読み込みでエラーが起きました。詳細は……", err);
			});
	});
}*/
/*
importタグを追加します。
例えば、<import src="./button.html" /> とすれば、 ./button.html の内容でそのタグが置き換えられます。
なお、標準では、最初にページが読み込まれたときにのみ import タグの置き換えがされます。
もし、それ以外のタイミングで import タグの解釈をさせたい場合、 importHTMLs 関数を引数無しで読んでください。
window.addEventListener("load", () => importHTMLs());

function importHTMLs() {
  const warn = (...＿) => console.warn("[importHTMLs] ", ...＿);
  Array.from(document.getElementsByTagName("import")).forEach(_ => {
    const path = _.getAttribute("src");
    if (!path) {
      warn("srcに読み込みたいファイルパスが指定されていないimportタグがありました。とりあえず無視しときました。");
      return;
    }
    fetch(path)
      .then(res => res.text())
      .then(text => {
        _.outerHTML = text;
      }).catch(err => {
        warn(path + " の読み込みでエラーが起きました。詳細は……", err);
      });
  });
}
*/