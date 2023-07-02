const sidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const container = document.querySelector(".container");
    const footer = document.querySelector(".footer");
    const buttonCollapseSidebar = document.querySelector(".sidebar__collapse-button");
    const tooltip = buttonCollapseSidebar.querySelector(".tooltip");

    if (buttonCollapseSidebar) {
        buttonCollapseSidebar.addEventListener("click", () => {
            sidebar.classList.toggle("collapse");
            container.classList.toggle("collapse");
            footer.classList.toggle("collapse");
            if (sidebar.classList.contains("collapse")) {
                tooltip.textContent = "Развернуть";
            } else {
                tooltip.textContent = "Свернуть";
            }
        });
    }
};

export default sidebar;