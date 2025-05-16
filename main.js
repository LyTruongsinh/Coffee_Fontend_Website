
/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const closeicon = document.getElementById("closeicon");
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("right-[0]");
});
closeicon.addEventListener("click", () => {
    navMenu.classList.toggle("right-[0]");
});
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("right-[0]");
    });
});
/*~~~~~~~~~~~~~~~ STICKY HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
    const stickyMenu = document.getElementById("sticky-menu");
    if (this.scrollY >= 150) {
        stickyMenu.classList.remove("lg:top-[-100%]");
        stickyMenu.classList.add("bg-black/80");
    }
    else {
        stickyMenu.classList.add("lg:top-[-100%]");
        stickyMenu.classList.remove("bg-black/80");
    }
};
window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 250) {
        scrollUp.classList.add("bottom-4");
        scrollUp.classList.remove("-bottom-1/2");
    }
    else {
        scrollUp.classList.remove("bottom-4");
        scrollUp.classList.add("-bottom-1/2");
    }
}
window.addEventListener("scroll", scrollUp);
/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/

const activeLink = () => { 
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute("id");
        if (this.scrollY >= sectionTop - 60) {
            current = sectionId;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if(link.href.includes(current)) {
            link.classList.add("active");
        }
    });
}
window.addEventListener("scroll", activeLink);
