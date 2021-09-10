// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    scrollIntoView(link);
});

// Make about slowly fade to transparent as the window scroll down
const about = document.querySelector('#about');
const aboutHeight = about.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    about.style.opacity = 1.25 - window.scrollY / aboutHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > aboutHeight/2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#about');
});

// Handle click on the logo 
const logo = document.querySelector('.navbar__logo');
logo.addEventListener('click', () => {
    scrollIntoView('#about');
});

// Projects
const pjBtnContainer = document.querySelector('.project__categories');
const pjContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

pjBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    // Remove selection from the previous btn and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    e.target.classList.add('selected');
    pjContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        pjContainer.classList.remove('anim-out');
    }, 300);
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}