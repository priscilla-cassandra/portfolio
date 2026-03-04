const projectsNavigation = document.getElementById("projects-navigation")
const aboutNavigation = document.getElementById("about-navigation")
const contactNavigation = document.getElementById("contact-navigation")

function scrollToProjects(){
    const projectSection = document.getElementById("project")
    projectSection.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollToAbout(){
    const aboutSection = document.getElementById("about")
    aboutSection.scrollIntoView({
        behavior: "smooth"
    })
}

function scrollToContact(){
    const contactSection = document.getElementById("contact")
    contactSection.scrollIntoView({
        behavior: "smooth"
    })
}

projectsNavigation.addEventListener("click", scrollToProjects)
aboutNavigation.addEventListener("click", scrollToAbout)
contactNavigation.addEventListener("click", scrollToContact)
