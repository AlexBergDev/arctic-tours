const carouselContainer = document.querySelector(".slideshow");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products?per_page=4";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const slider = await response.json();

        carouselContainer.innerHTML = "";

        createSlider(slider)
        show();
    }

    catch(error) {
        console.log(error);
        carouselContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createSlider(slider) {
    slider.forEach(function(sliders) {
        carouselContainer.innerHTML += `<div class="mySlides fade">
                                            <a href="post.html?id=${sliders.id}">
                                            <img src="${sliders.images[0].src}" style="width:100%">
                                            <h1 class="title">${sliders.name}</h1>
                                            </a>
                                        </div>`;
    })
}

function show() {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }
}