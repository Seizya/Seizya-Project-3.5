window.addEventListener("load",()=>importHTMLs());
function importHTMLs(){
 const warn = (...args) => console.warn("[importHTMLs] ",...args);
 Array.from(document.getElementsByTagName("import")).forEach(_ => {
   const path = _.getAttribute("src");
   if(!path){
     warn("srcに読み込みたいファイルパスが指定されていないimportタグがありました。とりあえず無視しときました。");
     return;
   }
   fetch(path)
     .then(res => res.text())
     .then(text => {
       _.outerHTML = text;
     }).catch(err => {
       warn(path + " の読み込みでエラーが起きました。詳細は……",err);
     });
 });
}