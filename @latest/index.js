const toggle_projects = e => {
    e.preventDefault();
    const TYPE = e.target.closest('[type]').getAttribute('type');
    document.querySelector('#project-filters [type].active')
        ?.classList.remove('active');
    
    e.target.closest('[type]').classList.add('active');
    document
        .querySelectorAll('#gallery .project')
        .forEach((project, _) => {
            const classList = project.classList;
            if(
                TYPE === '*' ||
                project.getAttribute('tag').includes(TYPE)
            ) {
                classList.remove('d-none');
            } else classList.add('d-none')
        });
};

document.querySelectorAll('#project-filters [type]').forEach((project_type, _) => {
    project_type.addEventListener('click', toggle_projects);
});