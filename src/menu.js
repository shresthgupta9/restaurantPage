import bone1img from "./media/bone1.jpeg";
import bone2img from "./media/bone2.jpeg";

const createMenuPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const menupg = document.createElement("div");
    menupg.classList.add("menupage");

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Menu";
    menupg.appendChild(heading);

    const txt1 = document.createElement("div");
    txt1.classList.add("txt");
    txt1.innerHTML = `
        <img src= ${bone1img}></img>
        <p>Bone 1</p>
        <p>Delicious bone which will make your heart melt. Yumm!</p>
    `;
    menupg.appendChild(txt1);

    const txt2 = document.createElement("div");
    txt2.classList.add("txt");
    txt2.innerHTML = `
        <img src= ${bone2img}></img>
        <p>Bone 2</p>
        <p>Another delicious bone.</p>
    `;
    menupg.appendChild(txt2);

    pageContent.appendChild(menupg);
    content.appendChild(pageContent);
}
export default createMenuPage;