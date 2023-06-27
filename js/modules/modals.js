const modals = () => {
    const modals = [
        "new-checkout",
        "checkout-info",
        "create-payment",
        "export",
        "payments-info",
        "edit-checkout",
    ];

    const openModal = (modal) => {
        const modalWrap = modal.querySelector('.modal__wrapper');
        modal.classList.add("open");
        document.body.classList.add("open");

        if (modalWrap.clientHeight >= document.body.clientHeight) {
            modal.classList.add("top");
        }
    };

    const closeModal = (modal) => {
        modal.classList.remove("open");
        document.body.classList.remove("open");
        modal.classList.remove("top");
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