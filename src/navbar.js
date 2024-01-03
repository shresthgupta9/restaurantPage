import createHomepage from "./homepage";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createNavbar = () => {
    const content = document.querySelector("#content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const home = document.createElement("p");
    home.textContent = "Home";
    navbar.appendChild(home);

    const menu = document.createElement("p");
    menu.textContent = "Menu";
    navbar.appendChild(menu);

    const contact = document.createElement("p");
    contact.textContent = "Contact";
    navbar.appendChild(contact);

    content.appendChild(navbar);

    home.addEventListener("click", () => {
        clearContent();
        createHomepage();
    })
    menu.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    })
    contact.addEventListener("click", () => {
        clearContent();
        createContactPage();
    })
};

const clearContent = () => {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent)
        content.removeChild(pageContent);
}

export default createNavbar;