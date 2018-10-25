(function () {
    //console.log(giveCSS("bg").width)
    if (Number(String(giveCSS("slide_chara").right).slice(0, -2)) >= Number(String(giveCSS("bg").width).slice(0, -2))) {
        chara_img = "url(./img/chara/" + (Math.round(Math.random() * 10) + 1) + ".png)";
        document.getElementById("slide_chara").style.backgroundImage = chara_img;
        document.getElementById("slide_chara").style.top = (Math.round(Math.random() * 70) + 10) + "vh";
        //console.log(chara_img);
    }
    requestAnimationFrame(arguments.callee);
})();

function slide_chara(flag) {
    if (flag == "true") {
        document.getElementById("slide_chara").className = "true";
    } else if (flag == "false") {
        document.getElementById("slide_chara").className = "false";
    } else {
        console.warn("規定されていない入力です。'true' か 'false' が規定されています。")
    }
}