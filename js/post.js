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
                                                <img src="${details.images[0].src}" alt="${details.name}" onclick="onClick(this)" class="modal-hover-opacity">
                                            </div>

                                            <div class="col-3">
                                                <div class="box">
                                                    <p class="date">Posted: 23-05-2021</p>
                                                    ${details.short_description}
                                                    ${details.description}
                                                    <p class="author">Author: ${details.tags[0].name}</p>
                                                    <p class="content">Category: ${details.categories[0].name}</p>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <img src="${details.images[1].src}" alt="${details.name}" onclick="onClick(this)" class="modal-hover-opacity">
                                            </div>

                                            <div class="col">
                                                <img src="${details.images[2].src}" alt="${details.name}" onclick="onClick(this)" class="modal-hover-opacity">
                                            </div>

                                            <div class="col">
                                                <img src="${details.images[3].src}" alt="${details.name}" onclick="onClick(this)" class="modal-hover-opacity">
                                            </div>

                                            <div class="col-3">
                                                <div class="box">
                                                <h2>Comments</h2>
                                                ${details.short_description}
                                                <textarea type="text" placeholder="Type your comment here.." style="height:100px"></textarea>
                                                <a class="button" href="#">Post</a>
                                                <p class="content">no comments</p>
                                                </div>
                                            </div>

                                        </div>`;
}