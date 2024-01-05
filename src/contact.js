import papadog from "./media/papadog.jpg";
import mamadog from "./media/mamadog.jpeg";
import babydog from "./media/babydog.jpg";

const createContactPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const contactpg = document.createElement("div");
    contactpg.classList.add("contactpage");

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Contact Us";
    contactpg.appendChild(heading);

    const txt1 = document.createElement("div");
    txt1.classList.add("txt");
    txt1.innerHTML = `
        <img src= ${papadog}></img>
        <p>Papa Dog, Manager</p>
        <p>0123456789</p>
    `;
    contactpg.appendChild(txt1);

    const txt2 = document.createElement("div");
    txt2.classList.add("txt");
    txt2.innerHTML = `
        <img src= ${mamadog}></img>
        <p>Mama Dog, Chef</p>
        <p>1234567890</p>
    `;
    contactpg.appendChild(txt2);

    const txt3 = document.createElement("div");
    txt3.classList.add("txt");
    txt3.innerHTML = `
        <img src= ${babydog}></img>
        <p>Baby Dog, Waiter</p>
        <p>2345678901</p>
    `;
    contactpg.appendChild(txt3);

    pageContent.appendChild(contactpg);
    content.appendChild(pageContent);
}
export default createContactPage;