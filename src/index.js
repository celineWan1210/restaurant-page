import "./styles.css"
import main from "./sections/main-page.js"
import home from "./sections/home-page.js"
import contact from "./sections/contact-page.js"


// select content
const content = document.querySelector("#content");
const welcomePage = document.querySelector(".welcome-page");


// main page and home page is show automatically
const mainPageDiv = main();
const homePageDiv = home();
const contactPageDiv = contact();

// welcomePage.appendChild(mainPageDiv);
// content.appendChild(homePageDiv);


// let currentPage = "home";

// document.addEventListener("click", e => {
//     if (e.target.classList.contains("contact") && currentPage !== "contact") {
//         mainPageDiv.remove();
//         homePageDiv.remove();

//         welcomePage.appendChild(contactPageDiv);

//         currentPage = "contact";
//     } else if (e.target.classList.contains("home") && currentPage !== "home") {
//         mainPageDiv.remove();
//         contactPageDiv.remove();

//         welcomePage.appendChild(mainPageDiv);
//         content.appendChild(homePageDiv);

//         currentPage = "home";
//     }
// })

welcomePage.appendChild(contactPageDiv);