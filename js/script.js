const resultsContainer = document.querySelector(".row");
const carouselContainer = document.querySelector(".slider");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        resultsContainer.innerHTML = "";
        carouselContainer.innerHTML = "";

        createHTML(results);
        createSlider(results)
    }

    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createHTML(posts) {
    posts.forEach(function(post) {
        resultsContainer.innerHTML += `<div class="col col-1">
                                            <div class="box">
                                                <h3 class="content">${post.name}</h3>
                                                <p class="content">${post.description}</p> 
                                                <a class="button" href="post.html?id=${post.id}">Read More</a>
                                            </div>
                                        </div>

                                        <div class="col post-image">
                                            <img src="${post.images[0].src}" alt="${post.name}">
                                        </div>`;
    })
}

function createSlider(slider) {
    slider.forEach(function(slider) {
        carouselContainer.innerHTML += `<section class="hero slider-1">
                                            <h1>${slider.name}</h1>
                                            <a class="hero-button" href="post.html?id=${slider.id}">Read More</a>
                                        </section>`;
    })
}