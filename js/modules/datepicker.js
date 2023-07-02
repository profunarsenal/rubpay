const datepicker = () => {
    const setClassFocused = (isDate, input) => {
        if (isDate) {
            input.parentNode.classList.add("focused");
        }
    };

    new AirDatepicker('#payments-filter-date', {
        onSelect(date) {
            setClassFocused(date.date, date.datepicker.$el);
        },
        autoClose: true,
        position: 'bottom right',
        container: document.querySelector(".filter__block")
    });

    new AirDatepicker('#payouts-filter-date', {
        onSelect(date) {
            setClassFocused(date.date, date.datepicker.$el);
        },
        autoClose: true,
        position: 'bottom right',
        container: document.querySelector(".filter__block")
    });

    new AirDatepicker('#payments-export-date', {
        onSelect(date) {
            setClassFocused(date.date, date.datepicker.$el);
        },
        autoClose: true,
        position: 'bottom right',
        container: document.querySelector(".export__content")
    });

    new AirDatepicker('#payouts-export-date', {
        onSelect(date) {
            setClassFocused(date.date, date.datepicker.$el);
        },
        autoClose: true,
        position: 'bottom right',
        container: document.querySelector(".export__content")
    });
};

export default datepicker;