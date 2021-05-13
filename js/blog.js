const resultsContainer = document.querySelector(".row");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const getResults = await response.json();

        resultsContainer.innerHTML = "";

        createHTML(getResults);
    }

    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createHTML(posts) {
    posts.forEach(function(post) {
        console.log(post);
        resultsContainer.innerHTML += `<div class="col col-1">
                                            <div class="box">
                                                <h3 class="content">${post.name}</h3>
                                                <p class="content">${post.description}</p> 
                                                <a class="button" href="#">Read More</a>
                                            </div>
                                        </div>

                                        <div class="col post-image">
                                            <img src="${post.images[0].src}" alt="${post.name}">
                                        </div>`;
    })
}