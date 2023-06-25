const sidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const container = document.querySelector(".container");
    const buttonCollapseSidebar = document.querySelector(".sidebar__collapse-button");

    if (buttonCollapseSidebar) {
        buttonCollapseSidebar.addEventListener("click", () => {
            sidebar.classList.toggle("collapse");
            container.classList.toggle("collapse");
        });
    }
};

export default sidebar;