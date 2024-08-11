//global variables
// let carousel = document.querySelectorAll(".carousel__card");
// let carouselArrowLeft = document.querySelector(".carousel__arrow--left");
// let carouselArrowRight = document.querySelector(".carousel__arrow--right");
// let carouselCurrent = 0;

//carousel
// carouselReset = () => {
//     for (let i = 0; i < carousel.length; i++) {
//         carousel[i].style.opacity = "1";
//         carousel[i].style.display = "flex";
//         carousel[i].style.animation = "5s fadeInOut ease-out";
//     }
// }

// carouselStartSlide = () => {
//     carouselReset();
//     carousel[i].style.opacity = "1";
//     carousel[i].style.display = "flex";
//     carousel[0].style.animation = "5s fadeInOut ease-out";
// }

// carouselSlideLeft = () => {
//     carouselReset();
//     carousel[carouselCurrent - 1].style.display = "flex";
//     carouselCurrent--;
// }

// carouselSlideRight = () => {
//     carouselReset();
//     carousel[carouselCurrent + 1].style.display = "flex";
//     carouselCurrent++;
// }

// carouselArrowLeft.addEventListener("click", () => {
//     if (carouselCurrent === 0) {
//         carouselCurrent = carousel.length;
//     }
//     carouselSlideLeft();
// });

// carouselArrowRight.addEventListener("click", () => {
//     if (carouselCurrent === carousel.length - 1) {
//         carouselCurrent = -1;
//     }
//     carouselSlideRight();
// });

// carouselSlideAuto = () => {
//     carouselReset();
//     carousel[carouselCurrent + 1].style.opacity = "1";
//     carousel[carouselCurrent + 1].style.display = "flex";
//     carousel[i].style.animation = "1s fadeInOut ease-out";
//     carouselCurrent++;
// }

// setInterval(() => {
//     if (carouselCurrent === carousel.length - 1) {
//         carouselCurrent = -1;
//     }
//     carouselSlideRight();
// }, "7000");

// carouselStartSlide();

// mobile nav sidebar
openNav = () => {
    document.getElementById("myNav").style.width = "200px";
}

closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
}

// animated navbar item underline
slidebar = (e) => {
    let element = e.target;
    let mouse = e.offsetX;
    let fullWidth = e.target.offsetWidth;
    let midWidth = (fullWidth / 2);
    if (mouse < midWidth) {
        element.classList.add('to-right');
        element.classList.remove('to-left');
    } else {
        element.classList.remove('to-right');
        element.classList.add('to-left');
    }
}

// trending carousel on infinite animation copy
let trendingCardWrapper = document.querySelector(".trending__card--wrapper").cloneNode(true);
let trending = document.querySelector(".trending__card--carousel").appendChild(trendingCardWrapper);
