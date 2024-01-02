const createContactPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const abcd = document.createElement("h4");
    abcd.textContent = "contact page";
    pageContent.appendChild(abcd);

    content.appendChild(pageContent);
}
export default createContactPage;