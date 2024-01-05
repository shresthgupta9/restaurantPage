import "./styles.css";
import background from "./background";
import createNavbar from "./navbar";
import createHomepage from "./homepage";
import createFooter from "./footer"

function initialize() {
    background();
    createNavbar();
    createHomepage();
    createFooter();
}

export default initialize;