const text = document.getElementById("text");
let input = "";
let index = 0;

document.addEventListener("keydown", function(event) {
    const char = event.key;

    if (char === "Shift") {
        return;
    }

    event.preventDefault();

    if (char === "Backspace") {
        if (input.length > 0) {
            input = input.slice(0, -1);
        }   
    } else {
        input += char;
    }

const currentChar = text.textContent.charAt(index);

if (char === currentChar) {
    text.innerHTML = text.textContent.substring(0, index) + '<font color="green">' + text.textContent.charAt(index) + "</font>" + text.textContent.substring(index + 1);
    index++;

    if (index === text.textContent.length) {
        index = 0;
        input = "";
    }
    } else {
        text.innerHTML = text.textContent.substring(0, index) + '<font color="red">' + text.textContent.charAt(index) + "</font>" + text.textContent.substring(index + 1);
    }
});

const currentChar = text.textContent.charAt(index);
const isUpperCase = currentChar === currentChar.toUpperCase();
const shouldShift = isUpperCase !== event.shiftKey;

if (shouldShift) {
    return;
}
