// on scroll function

function navMenu() {
    let navBar = document.querySelector(".navbar-sticky");
    let scrollTopButton = document.querySelector("#scrollUp");

    window.onscroll = () => {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navBar.classList.add("navbar-stickey-moved-up");
        }
        else {
            navBar.classList.remove("navbar-stickey-moved-up");
        }
    }

    // apply transition
    // if (scroll >= 250) {
    //     navBar.classList.add("navbar-sticky-transitioned");
    //     scrollTopButton.classList.add("scrollActive");
    // }
    // else{
    //     navBar.classList.remove("navbar-sticky-transitioned");
    //     scrollTopButton.classList.remove("scrollActive");
    // }


    // sticky on

    if (scroll >= 500){
        navBar.classList.add("navbar-sticky-on");
    }
    else{
        navBar.classList.add("navbar-sticky-on")
    }
}
navMenu();

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter (id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval( () => {
            current += increment;
            obj.textContent = current;

            if (current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1",0,10,3000);
    counter("count2",0,23,3000);
    counter("count3",0,9,3000);
    counter("count4",0,12,3000);
});

// app-screen


// side navigation bar close while we click on nvvaigation links
