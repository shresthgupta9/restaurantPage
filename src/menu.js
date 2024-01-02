const createMenuPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const abcd = document.createElement("h4");
    abcd.textContent = "menu page";
    pageContent.appendChild(abcd);

    content.appendChild(pageContent);
}
export default createMenuPage;