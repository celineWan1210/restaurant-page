// <div class="main-page">
//     <p class="title">Moonleaf Cafe</p>
//     <img src="assets/coffee-background.jpg" alt="coffee-background">
// </div>
import coffeeBackground from "../assets/coffee-background.jpg"

export default function main() {
    // main div
    const mainPageDiv = document.createElement("div");

    // title
    const titlePara = document.createElement("p");
    const node = document.createTextNode("Moonleaf Cafe");
    titlePara.appendChild(node);

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

