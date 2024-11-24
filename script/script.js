let display = document.querySelector(`#display`);
let currentInput = ``;

document.querySelectorAll(`.btn`).forEach(button => {
    if (button.id !== "equals") {
        button.addEventListener(`click`, function () {
            currentInput += this.dataset.value;
            display.value = currentInput;
        });
    }
});

document.getElementById(`equals`).addEventListener(`click`, function () {
    try {
        currentInput = currentInput.replace(/\s+/g, '');
        if (/^[\d+\-*/().]+$/.test(currentInput)) {
            display.value = eval(currentInput);
            currentInput = display.value;
        } else {
            throw new Error("Invalid input");
        }
    } catch (error) {
        display.value = `Error`;
        currentInput = ``;
    }
});

document.getElementById("clear").addEventListener("click", function () {
    currentInput = "";
    display.value = currentInput;
});
