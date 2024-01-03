import homepageImg from "./media/homepageimg.jpg";

const createHomepage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    pageContent.style.display = "flex";
    pageContent.style.justifyContent = "center";

    const homepg = document.createElement("div");
    homepg.classList.add("homepage");

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Doggy Respawrant";
    homepg.appendChild(heading);

    const txt1 = document.createElement("div");
    txt1.classList.add("txt");
    
    txt1.textContent = "Doggo has the best bone in town! The atmosphere and customer service make you feel like you are sitting in the middle of a kennel, eating like a doggo! This is exactly the kind of place that I like to return to again and again."
    homepg.appendChild(txt1);

    

    pageContent.appendChild(homepg);
    content.appendChild(pageContent);
}

export default createHomepage;