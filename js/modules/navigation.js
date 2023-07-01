const navigation = () => {
    const burgerButton = document.querySelector(".header__burger");
    const header = document.querySelector(".header");
    
    if (burgerButton) {
        burgerButton.addEventListener("click", () => {
            header.classList.toggle("open");
        });
    }
};

export default navigation;