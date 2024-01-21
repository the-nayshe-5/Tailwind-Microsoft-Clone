let slideIndex = 0;
let play_pause = 1;

function showSlide() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex > 1 || slideIndex == 0) {
        slideIndex = 0;
        slides[0].classList.remove("hidden");
        slides[1].classList.add("hidden");
        dots[0].setAttribute("src", "assets/black_dot.png");
        dots[1].setAttribute("src", "assets/white_dot.png");

    } else if (slideIndex < 0 || slideIndex == 1) {
        slideIndex = 1;
        slides[1].classList.remove("hidden");
        slides[0].classList.add("hidden");
        dots[1].setAttribute("src", "assets/black_dot.png");
        dots[0].setAttribute("src", "assets/white_dot.png");
    }
}

function plusSlides(i) {
    slideIndex += i;
    showSlide();
}

function slideshow() {
    let mode = document.getElementById("play_btn"); 
    if (play_pause == 1) {
        play_pause = 0;
        mode.setAttribute("src","assets/play.png");
    } else {
        play_pause = 1;
        mode.setAttribute("src","assets/pause.png");
    }
}


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }