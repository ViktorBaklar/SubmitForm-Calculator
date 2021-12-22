const num1Input=document.getElementById("firstNum");
const num2Input=document.getElementById("secondNum");
const ops=document.getElementById("operation");
const calc=document.getElementById("calcBtn");

const getCalc = function() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    const opsSymbol = ops.value;

    let res;
    switch (opsSymbol) {
        case "plus":
            res = num1 + num2;
            break;
        case "minus":
            res = num1 - num2;
            break;
        case "multiply":
            res = num1 * num2;
            break;
        case "divide":
            res = num1 / num2;
            break;
    }
    window.alert(`Результат ${Math.round(res)}`);
}
calc.addEventListener('click', getCalc)
