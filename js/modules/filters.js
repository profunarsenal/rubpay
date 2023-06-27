const filters = () => {
    const filterBlock = document.querySelector(".filter__block");

    if (filterBlock) {
        document.body.addEventListener("click", (e) => {
            if (e.target.closest(".filter-button")) {
                filterBlock.classList.add("open");
            } else if (!e.target.closest(".filter__block")) {
                filterBlock.classList.remove("open");
            }
        });
    }
};

export default filters;