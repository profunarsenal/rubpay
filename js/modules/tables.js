const tables = () => {
    const tables = document.querySelectorAll(".table__content");

    if (tables.length) {
        tables.forEach(table => {
            const hasScroll = table.scrollHeight > table.clientHeight;
            if (hasScroll) {
                table.classList.add("scroll");
            } else {
                table.classList.remove("scroll");
            }
        });
    }
};

export default tables;