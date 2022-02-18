const btnChange = document.getElementById("btn-change");
const colorRGB = document.querySelector(".colorRGB");
const colorHex = document.querySelector(".colorHex");

btnChange.addEventListener("click", () => {
    // color code in rgb
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;

    const colorCode = `rgb(${red}, ${green}, ${blue})`;
    colorRGB.textContent = `RGB: ${colorCode}`;

    // color code in hex
    colorHex.textContent = `Hex: ${concatHex(red, green, blue)}`;

    // set background color
    document.body.style.backgroundColor = colorCode;
});

/* 
next is to change the color code from rgb to hex
- rgb has 256 values and hex has 6 letters (2 account for each color)
- so in hex (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, A, B, C, D, E, F) = 16 * 16 = 256 in rgb
- take the value from rgb and divide 16
- if value more than 10 then use switch case to convert to hex value
*/

function toHex(value){
    let hexadecimal = value.toString(16);
    return hexadecimal.length == 1 ? `0${hexadecimal.toUpperCase()}`: hexadecimal.toUpperCase();
}

function concatHex(red, green, blue){
    return '#' + toHex(red) + toHex(green) + toHex(blue);
}
