const modals = () => {
    const modals = ["new-checkout", "checkout-info", "create-payment"];

    const openModal = (modal) => {
        modal.classList.add("open");
        document.body.classList.add("open");
    };

    const closeModal = (modal) => {
        modal.classList.remove("open");
        document.body.classList.remove("open");
    };

    if (modals.length) {
        modals.forEach(modal => {
            const window = document.querySelector(`.${modal}`);
            const button = document.querySelector(`.bm-${modal}`);

            if (window && button) {
                button.addEventListener("click", () => openModal(window));
                window.addEventListener("click", (e) => {
                    if (e.target.contains(window) || e.target.closest(".modal__close")) {
                        closeModal(window);
                    }
                });
            }
        });
    }
};

export default modals;