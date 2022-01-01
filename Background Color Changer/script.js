const btnChange = document.getElementById("btn-change");
const colorCodeOutput = document.getElementById("colorCodeOutput");

btnChange.addEventListener("click", () => {
    const colorCode = document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
    colorCodeOutput.innerHTML = `Color: ${colorCode}`;
});