const openProject = () => {
    const arrows = document.getElementsByClassName('project--arrow');

    for (let i=0; i<arrows.length; i++) {

        let arrow = arrows[i];
        arrow.parentElement.addEventListener("click", function() {
            extendBox(arrow);
            changeArrow(arrow);
        });
    }

}; openProject()

const extendBox = (arrow) => {
    const projectBox = arrow.parentElement.parentElement.querySelector('.project--box');
    projectBox.classList.toggle('invisible');
    projectBox.classList.toggle('visible');
}

const changeArrow = (arrow) => {
    arrow.classList.toggle('fa-chevron-down');
    arrow.classList.toggle('fa-chevron-up');
}