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


// toggle the service dropdown to toggle the sub-menu

let serviceDropdown = document.getElementById('service');
let dropdown = document.getElementById('dropdown');
let angleUp = document.getElementById('angleUp')
let angleDown = document.getElementById('angleDown');

serviceDropdown.addEventListener('click', () => {
    alert('hello');
    dropdown.classList.toggle('d-none');
    angleDown.classList.toggle('d-none')
    angleUp.classList.toggle('d-none')
})

// nav for mobile responsive 

let mobileMenuToggler = document.getElementById('toggle-button')
let mobilemenu = document.getElementById('mobile-menu')

mobileMenuToggler.addEventListener('click', () =>{
    
    let show = false

    if(!show){
        alert('just do it')
        mobileMenuToggler.innerHTML="CLOSE"
        mobilemenu.classList.toggle('d-none')
    }else{
        mobileMenuToggler.innerHTML="MENU"
    }
})
