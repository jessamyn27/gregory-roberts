// global variables
let homeBtn = document.getElementById("home-btn");
let home = document.getElementById("home");
let portfolioBtn = document.getElementById("portfolio-btn");
let portfolio = document.getElementById("portfolio");
let experienceBtn = document.getElementById("experience-btn");
let experience = document.getElementById("experience");
let bioBtn = document.getElementById("bio-btn");
let bio = document.getElementById("bio");

// default states
home.display = "flex";
portfolio.display = "none";
experience.display = "none";
bio.display = "none";

// mobile nav sidebar
openNav = () => {
    document.getElementById("myNav").style.width = "200px";
}

closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
}

handleClick = (event) => {
    let target = event.target;
    console.log(target);

    // click home
    if (target === homeBtn) {
        home.style.display = "flex";
        portfolio.style.display = "none";
        experience.style.display = "none";
        bio.style.display = "none";
    }

    // click portfolio
    if (target === portfolioBtn) {
        home.style.display = "none";
        portfolio.style.display = "flex";
        experience.style.display = "none";
        bio.style.display = "none";
    }

    // click experience
    if (target === experienceBtn) {
        home.style.display = "none";
        portfolio.style.display = "none";
        experience.style.display = "flex";
        bio.style.display = "none";
    }

    // click bio
    if (target === bioBtn) {
        home.style.display = "none";
        portfolio.style.display = "none";
        experience.style.display = "none";
        bio.style.display = "flex";
    }
}

handleClick();