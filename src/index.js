import "./styles.css"
import main from "./sections/main-page.js"

// select content
const content = document.querySelector("#content");

// main page
const mainPage = main();
content.appendChild(mainPage);