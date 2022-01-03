const number = document.getElementById("number");

// decrease button
const decrease = document.getElementById("decrease");
decrease.addEventListener("click", () => {
    let counter = +number.textContent;
    counter--;
    number.textContent = counter;
    check();
});

// reset button
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    number.textContent = "0";
});

// increase button
const increase = document.getElementById("increase");
increase.addEventListener("click", () => {
    let counter = +number.textContent;
    counter++;
    number.textContent = counter;
    check();
});

// check whether number is positive or negative
function check(){
    if(+number.textContent > 0){
        number.classList.add("green");
        number.classList.remove("red");
    }
    else if(+number.textContent < 0){
        number.classList.add("red");
        number.classList.remove("green");
    }
    else{
        number.classList.remove("green");
        number.classList.remove("red");
    }
}