burger = document.querySelector(".burger")
pages = document.querySelector(".pages")
burger.addEventListener("click", ()=>{
    pages.classList.toggle("v-nav")
    pages.classList.toggle("w-page")
})