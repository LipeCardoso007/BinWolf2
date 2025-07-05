function trocarbutao() {

    const menu = document.getElementById("submenuheader");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
