const tabs = () => {
    const tabsCheckoutInfo = document.querySelector(".checkout-info__tabs")
    const tabPayment = document.getElementById("tab-payment");
    const tabPayout = document.getElementById("tab-payout");

    if (tabPayout) {
        tabPayout.addEventListener("click", () => {
            tabsCheckoutInfo.classList.add("toggle");
        });
    }

    if (tabPayment) {
        tabPayment.addEventListener("click", () => {
            tabsCheckoutInfo.classList.remove("toggle");
        });
    }
};

export default tabs;