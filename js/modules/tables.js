const tables = () => {
    const buttonsShowApi = document.querySelectorAll(".b-show-api");

    if (buttonsShowApi.length) {
        buttonsShowApi.forEach(button => {
            button.addEventListener("click", (e) => {
                e.stopPropagation();

                const tooltip = button.querySelector(".tooltip");
                const apiValue = button.nextElementSibling;

                button.classList.toggle("active");
                apiValue.classList.toggle("show");

                if (tooltip && button.classList.contains("active")) {
                    tooltip.textContent = "Скрыть информацию";
                } else if (tooltip) {
                    tooltip.textContent = "Показать информацию";
                }
            });
        });
    }
};

export default tables;