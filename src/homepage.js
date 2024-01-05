const createHomepage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

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

    const txt2 = document.createElement("div");
    txt2.classList.add("txt");
    const txt2content = `
        <h1>Hours</h1>
        <p>Sunday: 8am - 8pm</p>
        <p>Monday: 6am - 6pm</p>
        <p>Tuesday: 6am - 6pm</p>
        <p>Wednesday: 6am - 6pm</p>
        <p>Thursday: 6am - 10pm</p>
        <p>Friday: 6am - 10pm</p>
        <p>Saturday: 8am - 10pm</p>
    `;
    txt2.innerHTML = txt2content;
    homepg.appendChild(txt2);

    const txt3 = document.createElement("div");
    txt3.classList.add("txt");
    const txt3content = `
        <h1>Location</h1>
        <p>Kennel No. 3, Forest Drive, Doggoland</p>
    `;
    txt3.innerHTML = txt3content;
    homepg.appendChild(txt3);

    pageContent.appendChild(homepg);
    content.appendChild(pageContent);
}

export default createHomepage;