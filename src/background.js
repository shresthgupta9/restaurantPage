import bone from "./media/bone.svg";

const background = () => {
    const content = document.querySelector("#content");
    content.style.backgroundImage = `url('${bone}')`;
};

export default background;