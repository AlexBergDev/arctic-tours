const resultsContainer = document.querySelector(".row");
const work = document.querySelector("#workOuterShell");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products?per_page=15";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const getResults = await response.json();

        resultsContainer.innerHTML = "";

        createHTML(getResults);
        viewMore();
        
    }

    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createHTML(posts) {
    posts.forEach(function(post) {
        resultsContainer.innerHTML += `<div class="col col-1 item">
                                                <div class="box">
                                                    <h3 class="content">${post.name}</h3>
                                                    ${post.short_description}
                                                    <a class="button" href="post.html?id=${post.id}">Read More</a>
                                                </div>
                                            </div>

                                            <div class="col post-image item">
                                                <a href="post.html?id=${post.id}"><img src="${post.images[0].src}" alt="${post.name}"></a>
                                            </div>`;
    })
}