/* ----------------------------
/*  Name: spokesman-project
    Author: Jack Phelan
    Version: 0
/* -------------------------- */
var slideArr = ["jesse","meehan","don","emma","azaria","amy","adam","shawn","arielle","jim","molly","rob"];
var buttons = document.getElementsByClassName("imgIcon");
var slides = document.getElementsByClassName("slide");
var cycle = 7000;
var timeout;

//gets clicked element id
//calls updateSlide
//call recursive fn slideshow
function clickImage() {
    var buttonId = event.srcElement.id;
    updateSlide(buttonId);
        var foo = slideArr.indexOf(buttonId);
        clearTimeout(timeout);
        slideshow(foo, buttons.length);
}
//removes all 'selected' classes except current
//removes all displayed slides except selected slide
function updateSlide(buttonId) {
    var slideId;
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("selected")) { 
        buttons[i].classList.remove("selected");
        slideId = slides[i].id;
        document.getElementById(slideId).classList.remove("showSlide");
    }
    }
    document.getElementById(buttonId + "_slide").classList.add("showSlide");
    document.getElementById(buttonId).classList.add("selected");
}

//hide previous slide and display current slide, recursive function
function slideshow(i, length) {
    for (j = 0; j < length; j++) {
    slides[j].classList.remove("showSlide");
    buttons[j].classList.remove("selected");
    }
    if (i === 12) {i = 0}
    buttons[i].classList.add("selected");
    slides[i].classList.add("showSlide");
    timeout =  setTimeout(slideshow, cycle, ++i, length);  
}



setTimeout(slideshow, cycle, 1, buttons.length);
