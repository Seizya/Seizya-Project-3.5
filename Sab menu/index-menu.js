operation_menus = () => ope_menus("select");
//menus--------------------------------------------------------------------------------------------
document.getElementById('menu').addEventListener('click', () => menus(""))
document.getElementById("menus-close").addEventListener('click', () => menus(""))

document.getElementById("chara-button").addEventListener('click', () => menus("chara-"))
document.getElementById("chara-menus-close").addEventListener('click', () => menus("chara-"))
document.getElementById("chara-true").addEventListener('click', () => {
    slide_chara("true");
    menus("all")
})
document.getElementById("chara-false").addEventListener('click', () => {
    slide_chara("false");
    menus("all")
})

document.getElementById("operation-button").addEventListener('click', () => menus("operation-"));
document.getElementById("operation-menus-close").addEventListener('click', () => menus("operation-"));
document.getElementById("operation-extra").addEventListener('click', () => ope_menus("extra"));
document.getElementById("operation-standard").addEventListener('click', () => ope_menus("standard"));
document.getElementById("operation-hard").addEventListener('click', () => ope_menus("hard"));
setTimeout(() => Array.from(document.getElementsByClassName("operation-menus-contents-close")).forEach(element => element.addEventListener('click', () => operation_menus())), 100);

//system-------------------------------------------------------------------------------------------
var menusTF = [false, undefined, undefined];

function menus(menus_number) {
    if (menus_number == "all") {
        Array.from(document.getElementsByClassName("menu-style")).forEach(element => element.classList.remove("true"));
    } else if (menusTF[0]) {
        document.getElementById(menusTF[1] + "menus").classList.remove("true");
        menusTF[0] = false;
        if (menusTF[1] != menus_number) {
            setTimeout(() => {
                document.getElementById(menus_number + "menus").classList.add("true");

                [menusTF[0], menusTF[1], menusTF[2]] = [true, menus_number, menusTF[1]]
            }, parseFloat(CSS(".menu-style")["transition-duration"][0]) * 1000 + 200);
        } else if (menusTF[1] == menus_number && menus_number != "") {
            setTimeout(() => {
                document.getElementById(menusTF[2] + "menus").classList.add("true");

                [menusTF[0], menusTF[1], menusTF[2]] = [true, menusTF[2], menusTF[1]]
            }, parseFloat(CSS(".menu-style")["transition-duration"][0]) * 1000 + 200);
        }
    } else if (!menusTF[0]) {
        document.getElementById(menus_number + "menus").classList.add("true");
        [menusTF[0], menusTF[1], menusTF[2]] = [true, menus_number, menusTF[1]]
    };
    if (menus_number == "") {
        setTimeout(() => {
            CSS("#operation-menus-contents")["height"] = "100%";
            Array.from(document.getElementsByClassName("operation-menus-contents-style")).forEach(element => element.style.height = "0");
        }, parseFloat(CSS(".menu-style")["transition-duration"][0]) * 1000 + 200);
    }
    //console.log(menus_number + "//", menusTF[1] + "//", menusTF[2]);
}

function ope_menus(type) {
    document.getElementById("operation-menus").classList.remove("true");
    setTimeout(() => {
        if (type != "select") {
            CSS("#operation-menus-contents")["height"] = 0;
            CSS("#operation-method-" + type)["height"] = "calc(100% - 3vh)";
        } else {
            CSS("#operation-menus-contents")["height"] = "100%";
            Array.from(document.getElementsByClassName("operation-menus-contents-style")).forEach(element => element.style.height = "0");
        }

        document.getElementById("operation-menus").classList.add("true");
    }, parseFloat(CSS(".menu-style")["transition-duration"][0]) * 1000 + 200);
    //console.log("Aa");
}