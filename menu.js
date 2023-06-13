const menuBar = document.querySelector(".menuList");
const menuToggle = document.querySelector(".menuToggle");

menuToggle.addEventListener('click', () => {
    const visibility = menuBar.getAttribute("data-visible");
    
    if(visibility === "false"){
        menuBar.setAttribute("data-visible", true);
        menuToggle.setAttribute("aria-expanded", true);
        console.log("a")
    } else if(visibility === "true"){
        menuBar.setAttribute("data-visible", false);
        menuToggle.setAttribute("aria-expanded", false);
    }
});