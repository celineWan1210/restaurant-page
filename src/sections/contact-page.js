export default function contact() {
    const contactDiv = document.createElement("div");
    
    const addressDiv = document.createElement("div");
    const addressSpan = document.createElement("span");
    addressSpan.textContent = "Address: 123 Brew Street, Georgetown, Penang, Malaysia";
    addressDiv.appendChild(addressSpan);


    contactDiv.appendChild(addressDiv);
    return contactDiv;
}