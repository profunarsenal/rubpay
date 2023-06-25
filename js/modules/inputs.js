const inputs = () => {
    const inputs = document.querySelectorAll(".input__field");

    if (inputs.length) {
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentNode.classList.add("focused");
            });
            input.addEventListener('blur', (e) => {
                if (!e.target.value) {
                    input.parentNode.classList.remove("focused");
                }
            });
        });
    }
};

export default inputs;
