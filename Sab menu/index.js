/*
このスクリプトは、どのスクリプトよりも早く読み込まれるようにしてください。

importタグを追加します。
例えば、<import src="./button.html" /> とすれば、 ./button.html の内容でそのタグが置き換えられます。
なお、標準では、最初にページが読み込まれたときにのみ import タグの置き換えがされます。
もし、それ以外のタイミングで import タグの解釈をさせたい場合、 importHTMLs 関数を引数無しで読んでください。

このスクリプトが読み込まれてから window の load イベントが発火するまでに追加された load イベントハンドラーは、importHTMLs 実行後に呼び出されます。

*/
(() => {
    var listeners = [];
    const tmp = window.addEventListener;
    window.addEventListener("load", (...args) => {
        importHTMLs().then(()=>{
        listeners.forEach(_ => _[0](...args));
        listeners.forEach(_ => tmp("load",...args));
        listeners = [];
    });
        window.addEventListener = tmp;
    });
    window.addEventListener = (type, ...args) => {
        if (type == "load") listeners.push(args);
        else tmp(type, ...args);
    }
})();
function importHTMLs() {
    const warn = (..._) => console.warn("[importHTMLs] ", ..._); return Promise.all(Array.from(document.getElementsByTagName("import")).map(_ => {
        const path = _.getAttribute("src");
        if (!path) {
            warn("srcに読み込みたいファイルパスが指定されていないimportタグがありました。とりあえず無視しときました。");
            return;
        }
        return fetch(path)
            .then(res => res.text())
            .then(text => _.outerHTML = text)
            .catch(err => warn(path + " の読み込みでエラーが起きました。詳細は……", err));
    }));
}

//document.getElementById('level').scrollTop = document.getElementById('level').scrollHeight;
function getCSS(id, name) {
	return getCSSById(document.getElementById(id), name);
}

function getCSSById(element, name) {
	return parseFloat(window.getComputedStyle(element).getPropertyValue(name))
}

function right_transition(id) {
	return parseFloat(window.getComputedStyle(document.getElementById("right")).getPropertyValue("transition-" + id)) * 1000
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