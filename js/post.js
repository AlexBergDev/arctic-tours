const resultsContainer = document.querySelector(".row");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products/" + id; 

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        resultsContainer.innerHTML = "";

        createHTML(details);
    }

    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createHTML(details) {
        resultsContainer.innerHTML += `<h2>${details.name}</h2>
                                        <div class="row">
                                            <div class="col">
                                                <img src="${details.images[0].src}" alt="${details.name}">
                                            </div>

                                            <div class="col-3">
                                                <div class="box">
                                                    <p class="content">${details.description}</p>
                                                    <p class="content">${details.description}</p>
                                                    <p class="content">Source: Unsplash.com</p>
                                                    <p class="author">Author: Jane Doe</p>
                                                    <p class="date">Posted: 23-05-2021</p>
                                                </div>
                                            </div>
                                        </div>`;
}