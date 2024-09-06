window.addEventListener("hashchange", () => {
    let hash = window.location.hash;
    if (hash) {
        let linkClass = document.querySelectorAll(".menu-item");
        linkClass.forEach(x => x.classList.remove("active"))
        document.querySelector('a[href="' + hash + '"]').classList.add("active");
    }
});