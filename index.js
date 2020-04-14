window.addEventListener("load", () => {
    // changing the  navbar background on scroll

    let myNav = document.getElementById('myNav')
    window.onscroll = () => { 
        if (document.documentElement.scrollTop >= 100 ) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        } 
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    };

})