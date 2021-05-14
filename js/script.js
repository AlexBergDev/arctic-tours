const carouselContainer = document.querySelector(".slider");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products?per_page=4";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        carouselContainer.innerHTML = "";

        createSlider(results)
    }

    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createSlider(slider) {
    slider.forEach(function(slider) {
        carouselContainer.innerHTML += `<section class="hero slider-1">
                                            <h1>${slider.name}</h1>
                                            <a class="hero-button" href="post.html?id=${slider.id}">Read More</a>
                                        </section>`;
    })
}