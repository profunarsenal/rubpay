import alignTables from "./modules/tables.js";
import setModals from "./modules/modals.js";
import setInputs from "./modules/inputs.js";

setModals();
setInputs();
alignTables();

const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
const buttonCollapseSidebar = document.querySelector(".sidebar__collapse-button");

if (buttonCollapseSidebar) {
    buttonCollapseSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("collapse");
        logo.classList.toggle("collapse");
        container.classList.toggle("collapse");
    });
}

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
///
