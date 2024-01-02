import homepageImg from "./media/homepageimg.jpg";

const createHomepage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const image = document.createElement("img");
    image.src = homepageImg;
    image.classList.add("mainimg");
    pageContent.append(image);

    const line = document.createElement("div");
    line.textContent = "Welcome!";
    pageContent.append(line);

    content.appendChild(pageContent);
}

export default createHomepage;