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
        position: 'bottom right',
        range: true,
        multipleDatesSeparator: ' - ',
        prevHtml: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9297 6.75435C15.2689 7.09349 15.2689 7.64335 14.9297 7.98249L10.9122 12L14.9297 16.0175C15.2689 16.3567 15.2689 16.9065 14.9297 17.2456C14.5906 17.5848 14.0407 17.5848 13.7016 17.2456L9.07003 12.6141C8.73089 12.2749 8.73089 11.7251 9.07003 11.3859L13.7016 6.75435C14.0407 6.41522 14.5906 6.41522 14.9297 6.75435Z"/>
                    </svg>`,
        nextHtml: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07014 17.2456C8.731 16.9065 8.731 16.3567 9.07014 16.0175L13.0877 12L9.07014 7.98249C8.731 7.64335 8.731 7.09349 9.07014 6.75435C9.40928 6.41521 9.95913 6.41521 10.2983 6.75435L14.9298 11.3859C15.269 11.7251 15.269 12.2749 14.9298 12.6141L10.2983 17.2456C9.95913 17.5848 9.40928 17.5848 9.07014 17.2456Z"/>
                    </svg>`,
    };

    new AirDatepicker('#payments-filter-date', {
        container: document.querySelector(".filter__block"),
        ...options,
    });

    new AirDatepicker('#payouts-filter-date', {
        container: document.querySelector(".filter__block"),
        ...options,
    });

    new AirDatepicker('#payments-export-date', {
        container: document.querySelector(".export__content"),
        ...options,
    });

    new AirDatepicker('#payouts-export-date', {
        container: document.querySelector(".payouts-export"),
        ...options,
    });
};

export default datepicker;