const modals = () => {
    const modals = [
        "new-checkout",
        "checkout-info",
        "create-payment",
        "export",
        "payments-info",
        "edit-checkout",
        "payouts-export",
        "create-payout",
        "payouts-info",
    ];

    const openModal = (modal) => {
        modal.classList.add("open");
        document.body.classList.add("open");
    };

    const closeModal = (modal) => {
        modal.classList.remove("open");
        document.body.classList.remove("open");
        modal.classList.remove("top");
        setTimeout(() => {
            modal.scrollTop = 0;
        }, 300);
    };

    if (modals.length) {
        modals.forEach(modal => {
            const window = document.querySelector(`.${modal}`);
            const buttons = document.querySelectorAll(`.bm-${modal}`);

            if (window && buttons.length) {
                buttons.forEach(button => {
                    button.addEventListener("click", () => openModal(window));
                })
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