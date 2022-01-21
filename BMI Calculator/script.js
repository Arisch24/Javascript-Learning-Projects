const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculate = document.getElementById('calculate');
const clear = document.getElementById('clear');
const output = document.getElementById('output');

height.addEventListener("input", () => {
    const pattern = /[0-9]{2,3}/;
    let heightTest = pattern.test(height.value);
    heightTest ? height.style.border = "2px solid #52fb6f": height.style.border = "2px solid red";
});

weight.addEventListener("input", () => {
    const pattern = /[0-9]{2,3}/;
    let weightTest = pattern.test(weight.value);
    weightTest ? weight.style.border = "2px solid #52fb6f": weight.style.border = "2px solid red";
});

calculate.addEventListener("click", () => {
    let squareHeight = (height.value / 100) * (height.value / 100);
    let bmi = weight.value / squareHeight;
    output.innerText = `Your BMI is: ${bmi.toFixed(2)}kg/m\xB2 `; // calculate and output BMI
});

clear.addEventListener("click", () => {
    document.querySelector('.bmi-form').reset(); // reset the form
});