const detailContainer = document.querySelector(".post");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "Insert URL here" + id + "Insert key here";

async function fetchPost() {

    try {
        const response = await fetch(url);
        const details = await response.json();


        createHtml(details);
      
    }
    catch(error) {
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchPost();

function createHtml(details) {
    detailContainer.innerHTML = ``;
                                
}