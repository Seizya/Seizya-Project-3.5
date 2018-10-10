window.addEventListener("load", () => importHTMLs());

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
}
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