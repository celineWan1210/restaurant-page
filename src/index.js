import "./styles.css"
import main from "./sections/main-page.js"
import home from "./sections/home-page.js"


// select content
const content = document.querySelector("#content");
const header = document.querySelector(".welcome-page");

// main page
const mainPage = main();
header.appendChild(mainPage);

content.appendChild(home());