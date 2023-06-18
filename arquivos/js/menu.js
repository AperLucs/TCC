const menuBar = document.querySelector(".menuList");
const menuToggle = document.querySelector(".menuToggle");
const userBar = document.querySelector(".userList");
const userToggle = document.querySelector(".userToggle");
const footerToggle = document.querySelector(".footerButton");
const footer = document.querySelector(".footer");

menuToggle.addEventListener('click', () => {
    const visibility = menuBar.getAttribute("data-visible");
    
    if(visibility === "false"){
        menuBar.setAttribute("data-visible", true);
        menuToggle.setAttribute("aria-expanded", true);
        userBar.setAttribute("data-visible", false);
        userToggle.setAttribute("aria-expanded", false);
    } else if(visibility === "true"){
        menuBar.setAttribute("data-visible", false);
        menuToggle.setAttribute("aria-expanded", false);
    }
});

userToggle.addEventListener('click', () => {
    const visibility = userBar.getAttribute("data-visible");
    
    if(visibility === "false"){
        userBar.setAttribute("data-visible", true);
        userToggle.setAttribute("aria-expanded", true);
        menuBar.setAttribute("data-visible", false);
        menuToggle.setAttribute("aria-expanded", false);
    } else if(visibility === "true"){
        userBar.setAttribute("data-visible", false);
        userToggle.setAttribute("aria-expanded", false);
    }
});

document.addEventListener('click', (e) => {
    if(!userBar.contains(e.target) && !userToggle.contains(e.target)){
        userBar.setAttribute("data-visible", false);
        userToggle.setAttribute("aria-expanded", false);
    }

    if(!menuBar.contains(e.target) && !menuToggle.contains(e.target)){
        menuBar.setAttribute("data-visible", false);
        menuToggle.setAttribute("aria-expanded", false);
    }
});

footerToggle.addEventListener('click', () => {
    const visibility = footer.getAttribute("data-visible");

    if(visibility === "false"){
        footer.setAttribute("data-visible", true);
        footerToggle.setAttribute("aria-expanded", true);
    } else if(visibility === "true"){
        footer.setAttribute("data-visible", false);
        footerToggle.setAttribute("aria-expanded", false);
    }

    console.log(footer.getAttribute("data-visible")+"/"+footerToggle.getAttribute("aria-expanded"));
});