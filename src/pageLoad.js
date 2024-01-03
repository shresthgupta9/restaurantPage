import "./styles.css";
import createNavbar from "./navbar";
import createHomepage from "./homepage";
import background from "./background";

function initialize() {
    background();
    createNavbar();
    createHomepage();
}

export default initialize;