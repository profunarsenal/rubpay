const inputs = () => {
    const inputs = document.querySelectorAll(".input__field");
    const selects = document.querySelectorAll(".select");

    if (inputs.length) {
        inputs.forEach(input => {
            input.addEventListener("focus", () => {
                input.parentNode.classList.add("focused");
            });
            input.addEventListener("blur", (e) => {
                e.stopPropagation();

                if (!e.target.value) {
                    input.parentNode.classList.remove("focused");
                }
            });
        });
    }

    if (selects.length) {
        selects.forEach(select => {
            const selectInput = select.querySelector(".input__field");
            const selectItems = select.querySelectorAll(".select__item");

            selectInput.addEventListener("click", () => {
                selects.forEach(item => {
                    item.classList.remove("open");
                });

                select.classList.toggle("open");

                if (selectInput.parentNode.classList.contains("focused") && !select.classList.contains("open")) {
                    selectInput.blur();
                }
            });

            selectItems.forEach(item => {
                item.addEventListener("click", (e) => {
                    e.stopPropagation();

                    selectItems.forEach(elem => {
                        elem.classList.remove("selected");
                    });

                    item.classList.add("selected");

                    if (e.target.closest(".select")) {
                        selectInput.value = item.textContent;
                        selectInput.parentNode.classList.add("focused");
                        select.classList.remove("open");
                    }
                });
            });
        })

        document.body.addEventListener("click", (e) => {
            if (!e.target.closest(".select")) {
                selects.forEach(select => {
                    select.classList.remove("open");
                })
            }
        })
    }
};

export default inputs;
