const datepicker = () => {
    const setClassFocused = (isDate, input) => {
        if (isDate) {
            input.parentNode.classList.add("focused");
        }
    };

    const options = {
        onSelect(date) {
            setClassFocused(date.date, date.datepicker.$el);
        },
        autoClose: true,
        // isMobile: window.innerWidth < 767 ? true : false,
    }

    const paymentsFilter = new AirDatepicker('#payments-date-filter', options);
    const paymentsExport = new AirDatepicker('#payments-export-date', options);

    // window.addEventListener("resize", () => {
    //     options.isMobile = window.innerWidth < 767 ? true : false;

    //     paymentsFilter.update(options);
    //     paymentsExport.update(options);
    // })
};

export default datepicker;