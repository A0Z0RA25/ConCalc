const intro = document.querySelector(".introduction");
const about = document.querySelector(".about-page")
const circleCon = document.querySelector(".circle-container");
const ellipseCon = document.querySelector(".ellipse-container");
const parabolaCon = document.querySelector(".parabola-container");
const hyperbolaCon = document.querySelector(".hyperbola-container");


function introduction(){
    if(intro.style.display = "none"){
        intro.style.display = "block";
        circleCon.style.display = "none";
        ellipseCon.style.display = "none";
        parabolaCon.style.display = "none";
        hyperbolaCon.style.display = "none"; 
        about.style.display = "none"; 

    } else{
        intro.style.display = "none"
    }
}

function aboutUs(){
    if(about.style.display = "none"){
        about.style.display = "block";
        intro.style.display = "none";
        circleCon.style.display = "none";
        ellipseCon.style.display = "none";
        parabolaCon.style.display = "none";
        hyperbolaCon.style.display = "none";  

    } else{
        about.style.display = "none";
    }
}


function circle(){
    if(circleCon.style.display = "none"){
        circleCon.style.display = "block";
        ellipseCon.style.display = "none";
        parabolaCon.style.display = "none";
        hyperbolaCon.style.display = "none";
        intro.style.display = "none";
        about.style.display = "none";
    }
    else{
        circleCon.style.display = "none";
    }
}

function ellipse(){
    if(ellipseCon.style.display = "none"){
        circleCon.style.display = "none";
        ellipseCon.style.display = "block";
        parabolaCon.style.display = "none";
        hyperbolaCon.style.display = "none";
        intro.style.display = "none";
        about.style.display = "none";
    }
    else{
        ellipseCon.style.display = "none";
    }
}

function parabola(){
    if(parabolaCon.style.display = "none"){
        circleCon.style.display = "none";
        ellipseCon.style.display = "none";
        parabolaCon.style.display = "block";
        hyperbolaCon.style.display = "none";
        intro.style.display = "none";
        about.style.display = "none";
    }
    else{
        parabolaCon.style.display = "none";
    }
} 
 
function hyperbola(){
    if(hyperbolaCon.style.display = "none"){
        circleCon.style.display = "none";
        ellipseCon.style.display = "none";
        parabolaCon.style.display = "none";
        hyperbolaCon.style.display = "block";
        intro.style.display = "none";
        about.style.display = "none";
    }
    else{
        hyperbolaCon.style.display = "none";
    }
}