//Imagens

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;
//functions
//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
//segundos da imagens
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide,5000)
    }
}
function showSlide(index){
//loop imagens
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
        slides[slideIndex].classList.add("displaySlide");
    });
}
//prev e next funcionalidade
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
}