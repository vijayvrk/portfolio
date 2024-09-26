/* ========================= toggle style switcher ========================== */
 const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
 styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
 })

 // hide style - switcher on scroll
 window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
 })

 /* ========================= theme colors ========================== */
 const alternateStyles = document.querySelectorAll(".alternate-style");
 function setActiveStyle(color)
 {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    }) 
 }

 /* ========================= theme light and dark mode ========================== */
 const dayNight = document.querySelector(".day-night");

 // Dark mode is enabled by default when the page loads
 window.addEventListener("load", () => {
   // Add the 'dark' class to the body by default
   document.body.classList.add("dark");
   
   // Set the sun icon (since dark mode is active by default)
   dayNight.querySelector("i").classList.add("fa-sun");
 });
 
 // Toggle between dark and light modes
 dayNight.addEventListener("click", () => {
   // Toggle between sun and moon icons
   dayNight.querySelector("i").classList.toggle("fa-sun");
   dayNight.querySelector("i").classList.toggle("fa-moon");
 
   // Toggle the 'dark' class on the body
   document.body.classList.toggle("dark");
 });