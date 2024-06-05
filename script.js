const intro = document.querySelector(".introduction");
const about = document.querySelector(".about-page");
 
const sideNav = document.querySelector(".side-nav");
const hamburgerBar = document.querySelector(".side-nav-btn");
function sideNavBtn(){
    sideNav.classList.toggle("open"); 
    if(sideNav.classList.contains("open")) {
        sideNav.style.transform = "translateX(0)";
        hamburgerBar.innerHTML = '<i class="fa-solid fa-square-xmark"></i>'; 
    } else {
        sideNav.style.transform = "translateX(-100%)";
        hamburgerBar.innerHTML = `<i class="fa-solid fa-bars-staggered"></i> `; 
    }
} 

// SHOW BTN
function introduction() {
    if (intro.style.display === "none") {
        intro.style.display = "block";
        about.style.display = "none";
    } else {
        intro.style.display = "block";
    }
}
 
function aboutUs() {
    if (about.style.display === "none") {
        about.style.display = "block";
        intro.style.display = "none";
    } else {
        about.style.display = "block";
    }
}

function circle() {
    if (circleList.style.display === "none") {
        circleList.style.display = "block";
    } else {
        circleList.style.display = "none";
    }
}

function ellipse() {
    if (ellipseList.style.display === "none") {
        ellipseList.style.display = "block";
    } else {
        ellipseList.style.display = "none";
    }
}

function parabola() {
    if (parabolaList.style.display === "none") {
        parabolaList.style.display = "block";
    } else {
        parabolaList.style.display = "none";
    }
}

function hyperbola() {
    if (hyperbolaList.style.display === "none") {
        hyperbolaList.style.display = "block";
    } else {
        hyperbolaList.style.display = "none";
    }
}
