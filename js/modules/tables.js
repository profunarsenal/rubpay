const tables = () => {
    const tables = document.querySelectorAll(".table__content");

    if (tables.length) {
        tables.forEach(table => {
            const hasScroll = table.scrollHeight > table.clientHeight;
            if (hasScroll) {
                table.classList.add("scroll");
            } else {
                table.classList.remove("scroll");
            }
        });
    }

    document.body.addEventListener("click", (e) => {
        const tableItem = e.target.closest(".checkout__api");
        const buttonShowApi = e.target.closest(".b-show-api");
        const buttonHideApi = e.target.closest(".b-hide-api");

        if (buttonShowApi) {
            const apiValue = tableItem.querySelector(".checkout__api-value");

            apiValue.classList.remove("hide");
            buttonShowApi.classList.add("hide");
            buttonShowApi.nextElementSibling.classList.remove("hide");
        }

        if (buttonHideApi) {
            const apiValue = tableItem.querySelector(".checkout__api-value");

            apiValue.classList.add("hide");
            buttonHideApi.classList.add("hide");
            buttonHideApi.previousElementSibling.classList.remove("hide");
        }
    });
};

export default tables;