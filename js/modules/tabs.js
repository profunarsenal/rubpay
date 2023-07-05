const tabs = () => {
    const tabsCheckoutInfo = document.querySelector(".checkout-info__tabs")

    if (tabsCheckoutInfo) {
        tabsCheckoutInfo.addEventListener("click", (e) => {
            if (e.target.closest("#tab-payout")) {
                tabsCheckoutInfo.classList.add("toggle");
            }

            if (e.target.closest("#tab-payment")) {
                tabsCheckoutInfo.classList.remove("toggle");
            }
        });
    }
};

export default tabs;