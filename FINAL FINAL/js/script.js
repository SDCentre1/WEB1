const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".site-header");

if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}

if(header){
    window.addEventListener("scroll", () => {
        if(window.scrollY > 20){
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }
    });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if(question){
        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    }
});