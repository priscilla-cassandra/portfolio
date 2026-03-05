const projectsNavigation = document.getElementById("projects-navigation")
const aboutNavigation = document.getElementById("about-navigation")
const contactNavigation = document.getElementById("contact-navigation")
const scrollToTopButton = document.getElementById("scoll-up-button")

function scrollToProjects(){
    const projectSection = document.getElementById("projects")
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

scrollToTopButton.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
