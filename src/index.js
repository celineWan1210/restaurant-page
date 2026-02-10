import "./styles.css"
import main from "./sections/main-page.js"
import home from "./sections/home-page.js"
import contact from "./sections/contact-page.js"
import menu from "./sections/menu-page.js"


// select content
const content = document.querySelector("#content");
const welcomePage = document.querySelector(".welcome-page");


// main page and home page is show automatically
const mainPageDiv = main();
const homePageDiv = home();
const contactPageDiv = contact();
const menuPageDiv = menu();

// select button
const homeButton = document.querySelector(".home");
const contactButton = document.querySelector(".contact");
const menuButton = document.querySelector(".menu");

welcomePage.appendChild(mainPageDiv);
content.appendChild(homePageDiv);


let currentPage = "home";
homeButton.style.color = "#834333";

document.addEventListener("click", e => {
    if (e.target.classList.contains("contact") && currentPage !== "contact") {
        mainPageDiv.remove();
        homePageDiv.remove();
        menuPageDiv.remove();

        // change color
        contactButton.style.color = "#834333";
        homeButton.style.color = "white";
        menuButton.style.color = "white";

        welcomePage.appendChild(contactPageDiv);

        currentPage = "contact";
    } else if (e.target.classList.contains("home") && currentPage !== "home") {
        mainPageDiv.remove();
        contactPageDiv.remove();
        menuPageDiv.remove();

        // change color
        homeButton.style.color = "#834333";
        contactButton.style.color = "white";
        menuButton.style.color = "white";

        welcomePage.appendChild(mainPageDiv);
        content.appendChild(homePageDiv);

        currentPage = "home";
    } else if (e.target.classList.contains("menu") && currentPage !== "menu") {
        mainPageDiv.remove();
        contactPageDiv.remove();
        homePageDiv.remove();

        // change color
        menuButton.style.color = "#834333";
        contactButton.style.color = "white";
        homeButton.style.color = "white";

        welcomePage.appendChild(menuPageDiv);
        currentPage = "menu";
    }
})


