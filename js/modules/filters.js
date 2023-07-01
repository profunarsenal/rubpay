const filters = () => {
    const filterBlock = document.querySelector(".filter__block");
    const searchInput = document.querySelector(".search__input");

    if (filterBlock) {
        document.body.addEventListener("click", (e) => {
            if (e.target.closest(".filter-button")) {
                filterBlock.classList.add("open");
            } else if (!e.target.closest(".filter__block")) {
                filterBlock.classList.remove("open");
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const buttonClear = document.querySelector(".search__clear");

            if (e.target.value) {
                searchInput.parentNode.classList.add("enter");
            } else {
                searchInput.parentNode.classList.remove("enter");
            }

            if (buttonClear) {
                buttonClear.addEventListener("click", () => {
                    searchInput.value = "";
                    searchInput.parentNode.classList.remove("enter");
                });
            }
        });
    }
};

export default filters;