function openMenu(){
    //adding a class to the body to let know that menu is open
    document.body.classList += " menu--open";  //classList can be a huge string of classes
}

function closeMenu(){
    document.body.classList.remove('menu--open');
}