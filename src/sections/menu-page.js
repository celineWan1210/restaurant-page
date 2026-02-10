import latteImage from "../assets/latte-coffee-pic.jpg"
import americanoImage from "../assets/americano-pic.jpg"
import cappucinoImage from "../assets/cappucino-pic.jpg"

export default function menu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    // build card function
    function buildSectionCard(imageSource, imageAlt, price) {
        const cardSection = document.createElement("div");
        const image = document.createElement("img");
        image.src = imageSource;
        image.alt = imageAlt;

        const menuDesc = document.createElement("div");
        const titleP = document.createElement("p");
        const priceP = document.createElement("p");
        titleP.textContent = imageAlt;
        priceP.textContent = price;
        menuDesc.appendChild(titleP);
        menuDesc.appendChild(priceP);

        cardSection.appendChild(image);
        cardSection.appendChild(menuDesc);

        return cardSection;
    }


    const cardOne = buildSectionCard(latteImage, "Coffee latte", "RM12");
    const cardTwo = buildSectionCard(americanoImage, "Americano", "RM8");
    const cardThree = buildSectionCard(cappucinoImage, "Cappucino", "RM13")
    
    // append
    menuDiv.append(cardOne, cardTwo, cardThree);
    return menuDiv;
}