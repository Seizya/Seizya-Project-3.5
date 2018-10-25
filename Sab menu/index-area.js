document.getElementById('right-close').addEventListener('click', () => {
    right_close();
})

document.getElementById('area1').addEventListener('click', () => {
    area_menu(1);
    // starts("../Brain God/index.html", 1);
})

document.getElementById('area2').addEventListener('click', () => {
    area_menu(2);
    // starts("../Brain G/index.html", 2);
})

document.getElementById('area3').addEventListener('click', () => {
    area_menu(3);
    // starts("../Brain Good/index.html", 3);
})

var area_menuTF = [false, undefined];
//CSS("#level ul")["height"] = "0";

function area_menu(area_number) {
    if (area_menuTF[0]) {
        if (area_menuTF[1] != area_number) {
            area_menu_false();
            setTimeout(() => level_scroll(area_number), parseFloat(CSS("#level ul")["transition-duration"]) * 1000);
        } else {
            area_menuTF[0] = false;
            area_menu_false();
        }
    } else {
        level_scroll(area_number);
    }
    area_menuTF[1] = area_number;
}

function area_menu_true(area_number) {
    CSS("#area_menu" + area_number)["height"] = "calc(" +
        parseFloat(CSS("#level li")["height"][0]) *
        (document.getElementById("area_menu" + area_number).getElementsByTagName("li").length) /
        parseFloat(giveCSS("bg").height) * 100 + "vh + " +
        482 * (getCSS("bg", "width") - parseFloat(CSS("#level ul")["font-size"][0])) / 480 * 9 / 482 + "px)";
    //console.log("Aa")

    area_menuTF[0] = true;
    document.getElementById("area" + area_number).style.background = "url(./img/nc9417.png)";
    document.getElementById("area" + area_number).style.color = "white";
    document.getElementById("area" + area_number).style.border = "solid 2px black";
    document.getElementById("area" + area_number).style.textShadow = " 0 0 10px black";
    //document.getElementById("bg").style.opacity = .7;
}

function area_menu_false() {
    CSS("#area_menu" + area_menuTF[1])["height"] = 0;
    document.getElementById("area" + area_menuTF[1]).style.background = "";
    document.getElementById("area" + area_menuTF[1]).style.color = "";
    document.getElementById("area" + area_menuTF[1]).style.border = "";
    document.getElementById("area" + area_menuTF[1]).style.textShadow = "";
    //document.getElementById("bg").style.opacity = 1;
}

function level_scroll(area_number) {
    A(area_number, 4);

    function A(area_number, scroll_speed) {
        (function () {
            if (Math.abs(document.getElementById("level").scrollTop -
                    parseFloat(CSS("#level li")["height"][0]) * (area_number - 1)) >= scroll_speed) {

                document.getElementById("level").scrollTop +=
                    (document.getElementById("level").scrollTop -
                        parseFloat(CSS("#level li")["height"][0]) * (area_number - 1)) <= 0 ? scroll_speed : -scroll_speed;

                //console.log("Aa");
                requestAnimationFrame(arguments.callee);
            } else {
                area_menu_true(area_number);
            }
            //呼び出し続けてるからだと思う。　まぁ,続きは頑張って起床後の僕よ。　就寝直前の僕より。　
        })();
    }
}