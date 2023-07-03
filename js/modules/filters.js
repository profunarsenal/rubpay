const filters = () => {
    const filterBlock = document.querySelector(".filter__block");
    const searchInput = document.querySelector(".search__input");
    const filterButton = document.querySelector(".filter-button");

    if (filterBlock) {
        document.body.addEventListener("click", (e) => {
            if (e.target.closest(".air-datepicker")) {
                return;
            }

            if (e.target.closest(".filter-button")) {
                filterBlock.classList.toggle("open");
                filterButton.classList.toggle("active");
            } else if (!e.target.closest(".filter__block")) {
                filterBlock.classList.remove("open");
                filterButton.classList.remove("active");
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