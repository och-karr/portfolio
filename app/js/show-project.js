const openProject = () => {
    const arrows = document.getElementsByClassName('project--arrow');

    for (let i=0; i<arrows.length; i++) {

        let arrow = arrows[i];
        arrow.parentElement.addEventListener('click', function() {
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




const closeAllProjects = () => {
    const closeBtn = document.getElementById('close-projects');

    const closeBox = () => {
        const projectBoxes = document.getElementsByClassName('project--box');

        for (let i=0; i<projectBoxes.length; i++) {
            let projectBox = projectBoxes[i];
            projectBox.classList.add('invisible');
            projectBox.classList.remove('visible');
        }
    }
    
    const addDownArrow = () => {
        const arrows = document.getElementsByClassName('project--arrow');

        for (let i=0; i<arrows.length; i++) {
            let arrow = arrows[i];
            arrow.classList.add('fa-chevron-down');
            arrow.classList.remove('fa-chevron-up');
        }
    }

    closeBtn.addEventListener('click', function() {
        console.log('aaaaa');
        closeBox();
        addDownArrow();
    })

}; closeAllProjects()