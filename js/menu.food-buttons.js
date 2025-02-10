function changeMenu(menuId)
{
    const allMenu = document.getElementsByClassName("menu__food-info");

    for (let i = 0; i < allMenu.length; i++) {
        allMenu[i].style.display = "none";
        
    }
    document.getElementById(menuId).style.display = "grid";
}

changeMenu('burgers')