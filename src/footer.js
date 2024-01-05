const createFooter = () => {
    const content = document.querySelector("#content");
    const footer = document.createElement("div");
    footer.classList.add("footer");
    const footContent = `
        <h2>Created by Shresth Raj Gupta</h2>
    `;
    footer.innerHTML = footContent;

    content.appendChild(footer);
};

export default createFooter;