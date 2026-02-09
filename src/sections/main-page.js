// <div class="main-page">
//     <p class="title">Moonleaf Cafe</p>
//     <img src="assets/coffee-background.jpg" alt="coffee-background">
// </div>
import coffeeBackground from "../assets/coffee-background.jpg"

export default function main() {
    // main div
    const mainPageDiv = document.createElement("div");
    mainPageDiv.classList.add("main-page");

    // title
    const titlePara = document.createElement("div");
    titlePara.classList.add("title")
    const titleParaSpan = document.createElement("span");
    titleParaSpan.textContent = "Moon Cafe";
    titlePara.appendChild(titleParaSpan);

    // image
    const mainImage = document.createElement("img");
    mainImage.src = coffeeBackground;
    mainImage.alt = "coffee-background";
    
    // combine
    mainPageDiv.appendChild(titlePara);
    mainPageDiv.appendChild(mainImage);

    // return
    return mainPageDiv;
}

