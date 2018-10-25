//menus--------------------------------------------------------------------------------------------
document.getElementById('menu').addEventListener('click', () => {
    if (document.getElementById('menus').classList.contains("true") != true) {
        document.getElementById('menus').classList.add("true");
        right_close();
    }
})

document.getElementById("menus-close").addEventListener('click', () => {
    if (document.getElementById('menus').classList.contains("true")) {
        document.getElementById('menus').classList.remove("true");
        document.getElementById('menus').classList.add("false");
        setTimeout(() => {
            document.getElementById('menus').classList.remove("false");
        }, CSS(".menus")["transition-duration"])
    }
})