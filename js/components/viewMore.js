function viewMore() {
    const items = Array.from(work.querySelectorAll(".item"));
    const loadMore = document.getElementById("loadMore");
    maxItems = 8;
    loadItems = 8;
    hiddenClass = "hiddenStyle";
    hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

    items.forEach(function (item, index) {
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
}