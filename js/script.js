const resultsContainer = document.querySelector(".results");

const url = "Insert URL here";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        resultsContainer.innerHTML = "";

        const posts = json.results;

        posts.forEach(function(post) {
            resultsContainer.innerHTML += ``;
        });
      
    }
    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();