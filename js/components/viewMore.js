function viewMore() {

    const cols = Array.from(loadContainer.querySelectorAll(".col"));
    colHidden = "col-hidden";
    hidden = Array.from(document.querySelectorAll(".col-hidden"));
    shownCol = 8;
    viewCol = 8;

    cols.forEach(function (col, current) {
        if (current > shownCol - 1) {
            col.classList.add(colHidden);
        }
    });

    viewMoreCol.addEventListener("click", function () {
        [].forEach.call(document.querySelectorAll("." + colHidden), function (
            col,
            current
        ) {
            
            if (current < viewCol) {
            col.classList.remove(colHidden);
            }

            if (document.querySelectorAll("." + colHidden).length === 0) {
            viewMoreCol.style.display = "none";
            }
        });
    });
}