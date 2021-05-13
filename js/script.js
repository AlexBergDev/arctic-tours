const resultsContainer = document.querySelector(".results");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wp/v2/posts";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const posts = json.results;

        posts.forEach(function(post) {
            resultsContainer.innerHTML += `<div class="col col-1">
                        <div class="box">
                            <h3 class="content">${post.title}</h3>
                            <p class="content">${post.content}</p>
                            <a class="button" href="#">Read More</a>
                        </div>
                    </div>

                    <div class="col">
                        <img src="images/first.jpg" alt="first" class="first">
                    </div>`;
        });
      
    }
    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();