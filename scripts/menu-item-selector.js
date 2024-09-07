//const anchor = document.getElementById("test");
//console.log(anchor.hash);

const menuItem = document.getElementsByClassName("menu-item");
//console.log(menuItem);


for (let i = 0; i < menuItem.length; i++) {

    //console.log(menuItem[i]);

    menuItem[i].addEventListener('click', function() {

        if (menuItem[i].classList.contains('menu-selected')) {
            menuItem[i].classList.remove('menu-selected');
            menuItem[i].classList.add('menu-selected');
        } else {
            menuItem[i].classList.add('menu-selected')
        }
        
    });

}

/* 
    Click Event Listener -> Guckt in die URL, liest hash aus, entfernt und fügt "selected" class hinzu
    Scroll Event Listener (nice to have?) -> Throttlen
*/

//document.getElementById(hash).style.backgroundColor="Yellow";

/*
window.addEventListener("hashchange", () => {
    let hash = window.location.hash;
    if (hash) {
        let linkClass = document.querySelectorAll(".menu-item");
        linkClass.forEach(x => x.classList.remove("active"))
        document.querySelector('a[href="' + hash + '"]').classList.add("active");
    }
}); */

