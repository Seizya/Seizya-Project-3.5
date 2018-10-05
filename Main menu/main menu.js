//scroll-------------------------------------------------------------
document.getElementById("scroll-type-title").addEventListener('click', () => {
    scroll_menu_hoverout("hover", 0, 1, 1, 1, 1, 1);
}, false);

document.getElementById("scroll-type-close").addEventListener('click', () => {
    scroll_menu_hoverout("out", 6, 0, 0, 0, 0, 0);
}, false);

function scroll_menu_hoverout(scroll, tittle, history_bg, poem_bg, history, poem, close) {
    document.getElementById("scroll").className = scroll;
    document.getElementById("scroll-type-title").style.height = String(tittle) + "vmin";

    document.getElementById("scroll-type-history-bg").style.opacity = String(history_bg);
    document.getElementById("scroll-type-poem-bg").style.opacity = String(poem_bg);

    document.getElementById("scroll-type-history").style.opacity = String(history);
    document.getElementById("scroll-type-poem").style.opacity = String(poem);

    document.getElementById("scroll-type-close").style.opacity = String(close);
}

loadPoemAndHistory();

function loadPoemAndHistory() {
    let poemHTML = undefined,
        historyHTML = undefined;
    let isShowingPoem = false; // falseのとき、 history を表示
    let updateView = () => {
        let html2show = isShowingPoem ? poemHTML : historyHTML;
        if (html2show !== undefined) {
            document.getElementById("dummy").innerHTML = html2show;
        }
    }
    document.getElementById("scroll-type-history").addEventListener("click", () => {
        isShowingPoem = false;
        updateView();
    });
    document.getElementById("scroll-type-poem").addEventListener("click", () => {
        isShowingPoem = true;
        updateView();
    });
    return Promise.all([
        fetch("./poem.html").then(res => {
            res.text().then(html => {
                poemHTML = html;
                updateView();
            });
        }),
        fetch("./history.html").then(res => {
            res.text().then(html => {
                historyHTML = html;
                updateView();
            });
        })
    ]);
}
//menu---------------------------------------------------------------
document.getElementById("menu").addEventListener('click', () => {
    if (document.getElementById("menu").className != "hover") {
        document.getElementById("menu").className = "hover";
        document.getElementById("menus").className = "menus-style hover";
    } else {
        menus_close();
    }
}, false);

document.getElementById("menus-close").addEventListener('click', () => {
    menus_close();
}, false);

function menus_close() {
    document.getElementById("menu").className = "out";
    document.getElementById("menus").className = "menus-style";
    document.getElementById("music-menus").className = "menus-style";
    document.getElementById("gear-menus").className = "menus-style";
    document.getElementById("bg-menus").className = "menus-style";
    document.getElementById("circle-menus").className = "menus-style";
}

document.getElementById("menus").addEventListener("click", e => e.stopPropagation());

//gear-menu----------------------------------------------------------
document.getElementById("gear-chenge").addEventListener('click', () => {
    document.getElementById("gear-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("gear-menu-back").addEventListener('click', () => {
    document.getElementById("gear-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("gear-off").addEventListener('click', () => {
    gear_chenge(1, "off", "off", "off", "off", "off");
})

document.getElementById("gear-static").addEventListener('click', () => {
    gear_chenge(2, "on", "off", "off", "off", "off");
})

document.getElementById("gear-dynamic").addEventListener('click', () => {
    gear_chenge(3, "off", "on", "on", "on", "on");
}, false);

var gear_number = [1, "off"];

function gear_chenge(gear_num, s2, g1, g2, g3, g4) {
    document.getElementById("gear-" + (gear_number[0] == 1 ? "off" : gear_number[0] == 2 ? "static" : "dynamic")).innerHTML = gear_number[1];
    gear_number[0] = gear_num;
    gear_number[1] = document.getElementById("gear-" + (gear_num == 1 ? "off" : gear_num == 2 ? "static" : "dynamic")).innerHTML;
    document.getElementById("gear-" + (gear_num == 1 ? "off" : gear_num == 2 ? "static" : "dynamic")).innerHTML += " / Now"

    document.getElementById("smbg2").className = s2;
    document.getElementById("gear1").className = g1;
    document.getElementById("gear2").className = g2;
    document.getElementById("gear3").className = g3;
    document.getElementById("gear4").className = g4;
}

document.getElementById("gear-menus").addEventListener("click", e => e.stopPropagation());
//music-menu---------------------------------------------------------

document.getElementById("music-menus").addEventListener("click", e => e.stopPropagation());

document.getElementById("music").addEventListener('click', () => {
    document.getElementById("music-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("music-menu-back").addEventListener('click', () => {
    document.getElementById("music-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

var bgm = new Audio();
bgm.src = "./music/nc97701.mp3";
bgm.loop = true;
bgm.volume = .3;
//bgm.play();

document.getElementById("volume").addEventListener('input', () => {
    bgm.volume = document.getElementById("volume").value;
}, false);

var clickf = true;
document.getElementById("music-onff").addEventListener('click', () => {
    clickf = !clickf;
    if (clickf) {
        bgm.play();
        document.getElementById("music-onff").innerHTML = "ON/OFF / " + (clickf === false ? "一時停止中" : "再生中") + ""
    } else {
        bgm.pause();
        document.getElementById("music-onff").innerHTML = "ON/OFF / " + (clickf === false ? "一時停止中" : "再生中") + ""
    }
}, false);

//bg-menu------------------------------------------------------------
document.getElementById("bg-menus").addEventListener("click", e => e.stopPropagation());

document.getElementById("bg-chenge").addEventListener('click', () => {
    document.getElementById("bg-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("bg-menu-back").addEventListener('click', () => {
    document.getElementById("bg-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("bg1").addEventListener('click', () => {
    bgcount(1);
}, false);

document.getElementById("bg2").addEventListener('click', () => {
    bgcount(2);
}, false);

document.getElementById("bg3").addEventListener('click', () => {
    bgcount(3);
}, false);

document.getElementById("bg4").addEventListener('click', () => {
    bgcount(4);
}, false);

var bgnumber;
var bgname = [1, "Star Night", "bg" + bgnumber];

function bgcount(bgnumber) {
    //console.log(bgname[1]);
    document.getElementById("bg" + bgname[0]).innerHTML = bgname[1];
    //bgchenge (bgurl,linex,liney,circle,circle3)
    if (bgnumber == 1) {
        bgchenge("url('./img/bgc.png')", "white", "white", "url('./img/smg/smg11.png')", "url('./img/smg/SW12-3.png')");
    }
    if (bgnumber == 2) {
        bgchenge("url('./img/bg.png')", "black", "black", "url('./img/smg/smg5.png')", "url('./img/smg/SW12-2.png')");
    }
    if (bgnumber == 3) {
        bgchenge("url('./img/back.jpg')", "black", "black", "url('./img/smg/smg5.png')", "url('./img/smg/SW12-4.png')");
    }
    if (bgnumber == 4) {
        bgchenge("url('./img/nc9416.png')", "white", "white", "url('./img/smg/smg5.png')", "url('./img/smg/smg5.png')");
    }

    function bgchenge(bgurl, linex, liney, circle, circle3) {
        document.getElementById("bg").style.backgroundImage = bgurl;
        document.getElementById("line-x").style.borderBottomColor = linex;
        document.getElementById("line-y").style.borderRightColor = liney;
        document.getElementById("circle").style.backgroundImage = circle;
        document.getElementById("circle3").style.backgroundImage = circle3;
    }

    bgname[1] = document.getElementById("bg" + bgnumber).innerHTML;
    bgname[0] = bgnumber;
    document.getElementById("bg" + bgnumber).innerHTML += " / Now";
}

//circle-menu--------------------------------------------------------
document.getElementById("circle-menus").addEventListener("click", e => e.stopPropagation());

document.getElementById("circle-chenge").addEventListener('click', () => {
    document.getElementById("circle-menus").className = "menus-style hover";
    document.getElementById("menus").className = "menus-style";
}, false);

document.getElementById("circle-menu-back").addEventListener('click', () => {
    document.getElementById("circle-menus").className = "menus-style";
    document.getElementById("menus").className = "menus-style hover";
}, false);

document.getElementById("circle-static").addEventListener('click', () => {
    circle_chenge(1);
    document.getElementById("circle").className = "";
    document.getElementById("circle2").className = "";
    document.getElementById("circle3").className = "";
}, false);

document.getElementById("circle-dynamic").addEventListener('click', () => {
    circle_chenge(2);
    document.getElementById("circle").className = "circle-rotation";
    document.getElementById("circle2").className = "circle-rotation";
    document.getElementById("circle3").className = "circle-rotation";
}, false);

var circle_number = [2, "Dynamic"];

function circle_chenge(circle_num) {
    document.getElementById("circle-" + (circle_number[0] == 1 ? "static" : "dynamic")).innerHTML = circle_number[1];
    circle_number[0] = circle_num;
    circle_number[1] = document.getElementById("circle-" + (circle_number[0] == 1 ? "static" : "dynamic")).innerHTML;
    document.getElementById("circle-" + (circle_number[0] == 1 ? "static" : "dynamic")).innerHTML += " / Now"
}
//start-menu---------------------------------------------------------
document.getElementById("start").addEventListener('click', () => {
    if (document.getElementById("start").className != "hover") {
        document.getElementById("start").className = "hover";
        document.getElementById("starts").className = "hover";
    }
}, false);

document.getElementById("st-close").addEventListener("click", e => e.stopPropagation());

document.getElementById("st-close").addEventListener('click', () => {
    document.getElementById("start").className = "out";
    document.getElementById("starts").className = "";
}, false);