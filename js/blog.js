const resultsContainer = document.querySelector(".row");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products?per_page=12";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const getResults = await response.json();

        resultsContainer.innerHTML = "";

        createHTML(getResults);
        
    }

    catch(error) {
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createHTML(posts) {
    posts.forEach(function(post) {
        resultsContainer.innerHTML += `<div class="item">
                                            <div class="col col-1">
                                                <div class="box">
                                                    <h3 class="content">${post.name}</h3>
                                                    ${post.short_description}
                                                    <a class="button" href="post.html?id=${post.id}">Read More</a>
                                                </div>
                                            </div>

                                            <div class="col post-image">
                                                <a href="post.html?id=${post.id}"><img src="${post.images[0].src}" alt="${post.name}"></a>
                                            </div>
                                        </div>`;
    })
}


var work = document.querySelector("#workOuterShell");
var items = Array.from(work.querySelectorAll(".item"));
var loadMore = document.getElementById("loadMore");
maxItems = 4;
loadItems = 4;
hiddenClass = "hiddenStyle";
hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

items.forEach(function (item, index) {
  console.log(item.innerText, index);
  if (index > maxItems - 1) {
    item.classList.add(hiddenClass);
  }
});

loadMore.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
    item,
    index
  ) {
    if (index < loadItems) {
      item.classList.remove(hiddenClass);
    }

    if (document.querySelectorAll("." + hiddenClass).length === 0) {
      loadMore.style.display = "none";
    }
  });
});