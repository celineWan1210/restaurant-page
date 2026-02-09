import shopDetails from "../assets/shop-details.jpg"

export default function home() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-div");

    // image
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = shopDetails;
    image.alt = "shop-details";
    imageDiv.appendChild(image);
    imageDiv.classList.add("img-div");

    // description
    const descriptionDiv = document.createElement("div");
    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = "Moonleaf Cafe is a cozy, modern coffee haven where every cup is crafted with care. Nestled in a warm and inviting space, we blend the rich aroma of freshly brewed coffee with a relaxing atmosphere perfect for work, study, or catching up with friends. Our menu features a variety of specialty coffees, teas, and hand-crafted desserts, made from high-quality ingredients to delight every palate. At Moonleaf Cafe, every sip tells a story, and every visit feels like a little escape from the daily grind.";
    descriptionDiv.appendChild(descriptionSpan);
    descriptionDiv.classList.add("desc-div")
    
    // combine
    homeDiv.appendChild(imageDiv);
    homeDiv.appendChild(descriptionDiv);

    return homeDiv;
}