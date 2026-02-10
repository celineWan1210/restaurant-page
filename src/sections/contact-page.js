export default function contact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-div");

    // title div
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div")
    const titleSpan = document.createElement("span");
    titleSpan.textContent = "Contact & Hours";
    titleDiv.appendChild(titleSpan);

    // content div
    const ContentDiv = document.createElement("div");
    ContentDiv.classList.add("contact-content");

    // content para
    const addressP = document.createElement("p");
    addressP.textContent = "Address: 123 Brew Street, Georgetown, Penang, Malaysia";
    const telephoneP = document.createElement("p");
    telephoneP.textContent = "Phone: +60 12-345 6789";
    const emailP = document.createElement("p");
    emailP.textContent = "Email: hello@mooncafemy.com";
    const workingHoursP = document.createElement("p");
    workingHoursP.textContent = "Working hours: Monday - Friday 10:00 AM - 9:00 PM"


    ContentDiv.appendChild(addressP);
    ContentDiv.appendChild(telephoneP);
    ContentDiv.appendChild(emailP);
    ContentDiv.appendChild(workingHoursP);

    contactDiv.appendChild(titleDiv);
    contactDiv.appendChild(ContentDiv);
    return contactDiv;
}