var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident|Edge\//.test(ua);

if (isIE) {
    document.querySelector("html").style.display = "none";
}
// Scroll Event
var header = document.querySelector(".header");
var headerFixed = document.querySelector(".header-container-fixed");
var headerUnFixed = document.querySelector(".header-container-unfixed");
var scrollButton = document.querySelector(".scroll-top-button");
var prevScrollPosition = window.pageYOffset;
if (prevScrollPosition > 200) {
    headerUnFixed.style.transition = "none";
}
scrollButton.addEventListener("click", scrollTopFunction);
window.onscroll = function() {
    //Scroll Button Event
    var currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition < currentScrollPosition) {
        if (currentScrollPosition > 500) {
            scrollButton.style.display = "block";
        }
    } else {
        if (currentScrollPosition < 500) {
            scrollButton.style.display = "none";
        }
    }
    prevScrollPosition = currentScrollPosition;
    //End Scroll Button Event
    //Header Scroll Event
    
}

function scrollTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// End Scroll Event

//Slow appear Event
var headerContent = document.querySelectorAll(".content-heading__foreground .slow-appear");
var time;
var i = 0;

function slowShowHero() {
    if (headerContent[i].length > 1) {
        time = 50;
    } else {
        time = 300;
    }
    setTimeout(function() {
        headerContent[i].style.display = "flex";
        headerContent[i].style.opacity = "1";
        i++;
        if (i < headerContent.length) {
            slowShowHero();
        }
    }, time)
}
slowShowHero();


// End slow appear Event